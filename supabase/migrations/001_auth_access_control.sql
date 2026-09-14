-- Med Aprovação / Cronograma de Estudos APP
-- Multi-user access model. No progress data is exposed to the administrator.

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null,
  username text not null unique,
  is_active boolean not null default true,
  is_admin boolean not null default false,
  last_login_at timestamptz,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create or replace function public.is_admin(p_uid uuid)
returns boolean language sql stable security definer set search_path = public
as $$ select exists(select 1 from public.profiles where id = p_uid and is_admin = true and is_active = true); $$;
revoke all on function public.is_admin(uuid) from public;
grant execute on function public.is_admin(uuid) to authenticated;

drop policy if exists profiles_select_self_or_admin on public.profiles;
create policy profiles_select_self_or_admin on public.profiles for select to authenticated
using (id = (select auth.uid()) or public.is_admin((select auth.uid())));

drop policy if exists profiles_update_self on public.profiles;
create policy profiles_update_self on public.profiles for update to authenticated
using (id = (select auth.uid())) with check (id = (select auth.uid()));
revoke all on public.profiles from anon;
grant select, update on public.profiles to authenticated;

create or replace function public.touch_last_login()
returns void language sql security definer set search_path = public
as $$ update public.profiles set last_login_at = now() where id = auth.uid() and is_active = true; $$;
revoke all on function public.touch_last_login() from public;
grant execute on function public.touch_last_login() to authenticated;

-- Administrator sees only identity/access metadata, never progress.
drop view if exists public.admin_user_list;
create view public.admin_user_list with (security_invoker = true) as
select id, display_name, username, is_active, last_login_at, created_at
from public.profiles where is_admin = false;
revoke all on public.admin_user_list from anon;
grant select on public.admin_user_list to authenticated;

create or replace function public.admin_set_user_active(target_user_id uuid, active boolean)
returns void language plpgsql security definer set search_path = public
as $$ begin
  if not public.is_admin(auth.uid()) then raise exception 'not authorized'; end if;
  update public.profiles set is_active = active where id = target_user_id and is_admin = false;
end; $$;
revoke all on function public.admin_set_user_active(uuid,boolean) from public;
grant execute on function public.admin_set_user_active(uuid,boolean) to authenticated;

-- Each user's journey state is isolated by user_id. The admin has no policy to read it.
create table if not exists public.user_progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  state jsonb not null default '{"day":1,"done":{}}'::jsonb,
  updated_at timestamptz not null default now()
);
alter table public.user_progress enable row level security;
revoke all on public.user_progress from anon;
grant select, insert, update on public.user_progress to authenticated;
drop policy if exists progress_select_own on public.user_progress;
create policy progress_select_own on public.user_progress for select to authenticated using (user_id = (select auth.uid()));
drop policy if exists progress_insert_own on public.user_progress;
create policy progress_insert_own on public.user_progress for insert to authenticated with check (user_id = (select auth.uid()));
drop policy if exists progress_update_own on public.user_progress;
create policy progress_update_own on public.user_progress for update to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));

-- NOTE: admin_create_user is intentionally implemented as an Edge Function,
-- because creating Auth users requires a server-side secret and must never be done with the publishable key in the APK.
