# Configuração do acesso individual — Cronograma de Estudos APP

## 1. Criar projeto
Crie um projeto no Supabase.

## 2. Rodar a migration
No SQL Editor, execute:
`supabase/migrations/001_auth_access_control.sql`

Ela cria:
- `profiles`: nome, usuário, status e último acesso;
- `user_progress`: progresso privado por usuário;
- RLS para impedir que um usuário veja o progresso de outro;
- visão administrativa contendo apenas nome/usuário/status/último acesso.

## 3. Criar o administrador
No Supabase Auth, crie manualmente o usuário administrador com e-mail e senha.
Depois, na tabela `public.profiles`, associe o mesmo UUID e marque `is_admin = true` e `is_active = true`.

Exemplo conceitual:
```sql
insert into public.profiles (id, display_name, username, is_admin, is_active)
values ('UUID_DO_ADMIN', 'Administrador', 'admin', true, true);
```

## 4. Publicar a Edge Function
Publique `supabase/functions/admin-create-user/index.ts` como `admin-create-user`.
A função usa a chave secreta do Supabase somente no servidor para criar contas; essa chave nunca deve entrar no APK.

## 5. GitHub Actions
Cadastre no repositório os secrets:
- `SUPABASE_URL`
- `SUPABASE_PUBLISHABLE_KEY`

O APK de usuário é então construído com autenticação e progresso sincronizado na nuvem.

## 6. Modelo final
- Seu APK principal pode continuar sendo usado sem login.
- O acesso administrativo é feito pelo painel `admin/index.html`, protegido por sua conta de administrador.
- Usuários recebem o APK de usuário e entram com usuário/senha.
- O administrador vê apenas nome, usuário, status e último acesso.
- O administrador não recebe políticas para ler `user_progress`.

## 7. Proteção de conteúdo
O Android usa `FLAG_SECURE` para bloquear screenshots/captura de tela pelas APIs normais do Android, e o HTML bloqueia cópia/seleção/menu contextual como camada adicional. Isso reduz muito a extração casual, mas não existe proteção absoluta contra fotografia/OCR ou engenharia reversa de um APK distribuído.
