import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors })
  if (req.method !== 'POST') return new Response('Method not allowed', { status: 405, headers: cors })

  const url = Deno.env.get('SUPABASE_URL') ?? ''
  const publishable = Deno.env.get('SUPABASE_ANON_KEY') ?? ''
  const secret = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
  const authHeader = req.headers.get('Authorization') ?? ''
  if (!url || !publishable || !secret || !authHeader) {
    return new Response(JSON.stringify({ error: 'Server not configured' }), { status: 500, headers: { ...cors, 'Content-Type': 'application/json' } })
  }

  const caller = createClient(url, publishable, { global: { headers: { Authorization: authHeader } } })
  const { data: { user } } = await caller.auth.getUser()
  if (!user) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: { ...cors, 'Content-Type': 'application/json' } })

  const { data: admin } = await caller.from('profiles').select('is_admin,is_active').eq('id', user.id).single()
  if (!admin?.is_admin || !admin?.is_active) return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403, headers: { ...cors, 'Content-Type': 'application/json' } })

  const body = await req.json()
  const name = String(body.name ?? '').trim()
  const username = String(body.username ?? '').trim().toLowerCase()
  const password = String(body.password ?? '')
  if (!name || !/^[a-z0-9._-]{3,40}$/.test(username) || password.length < 8) {
    return new Response(JSON.stringify({ error: 'Invalid name, username or password' }), { status: 400, headers: { ...cors, 'Content-Type': 'application/json' } })
  }

  const email = `${username}@login.medaprovacao.app`
  const adminClient = createClient(url, secret)
  const { data: created, error } = await adminClient.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { display_name: name, username },
  })
  if (error || !created.user) {
    return new Response(JSON.stringify({ error: error?.message ?? 'Could not create user' }), { status: 400, headers: { ...cors, 'Content-Type': 'application/json' } })
  }

  const { error: profileError } = await adminClient.from('profiles').insert({
    id: created.user.id,
    display_name: name,
    username,
    is_active: true,
    is_admin: false,
  })
  if (profileError) {
    await adminClient.auth.admin.deleteUser(created.user.id)
    return new Response(JSON.stringify({ error: profileError.message }), { status: 400, headers: { ...cors, 'Content-Type': 'application/json' } })
  }

  return new Response(JSON.stringify({ ok: true, id: created.user.id }), { status: 200, headers: { ...cors, 'Content-Type': 'application/json' } })
})
