from pathlib import Path
import os

p = Path('android/app/src/main/assets/cronograma.html')
s = p.read_text(encoding='utf-8')

url = os.environ.get('SUPABASE_URL', '')
key = os.environ.get('SUPABASE_PUBLISHABLE_KEY', '')

if not url or not key:
    raise SystemExit('SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY GitHub secrets are required for the user APK build.')

css = r'''<style id="auth-security-style">
#authGate{position:fixed;inset:0;z-index:10000;background:radial-gradient(circle at top,#10261b 0,#06100c 48%,#040a07 100%);display:flex;align-items:center;justify-content:center;padding:20px}
#authGate .authbox{width:min(440px,100%);background:#0b1712;border:1px solid #28583f;border-radius:22px;padding:24px;box-shadow:0 22px 70px rgba(0,0,0,.55)}
#authGate h2{margin-bottom:8px}.auth-actions{display:flex;gap:8px;margin-top:12px}.auth-error{color:#ff9da3;font-size:12px;margin-top:10px;min-height:18px}.no-copy{-webkit-user-select:none;user-select:none}
</style>'''

markup = r'''<div id="authGate" class="no-copy">
<div class="authbox"><div style="font-size:34px">📚</div><h2>🔐 Acesso pessoal</h2><p class="muted">Entre com seu usuário e senha para acessar o Cronograma de Estudos APP.</p><label class="muted">Usuário</label><input id="authUsername" autocomplete="username" placeholder="Seu usuário"><label class="muted" style="display:block;margin-top:9px">Senha</label><input id="authPassword" type="password" autocomplete="current-password" placeholder="Sua senha" onkeydown="if(event.key==='Enter')window.appLogin()"><div class="auth-actions"><button class="btn primary" onclick="window.appLogin()" style="flex:1">Entrar</button></div><div id="authError" class="auth-error"></div></div>
</div>'''

js = r'''<script id="supabase-auth-layer">
(function(){'use strict';
const SUPABASE_URL='__URL__',SUPABASE_KEY='__KEY__',USER_DOMAIN='login.medaprovacao.app';
let sb=null,currentUser=null;
function syntheticEmail(u){return String(u||'').trim().toLowerCase().replace(/[^a-z0-9._-]/g,'')+'@'+USER_DOMAIN}
function showError(m){const e=document.getElementById('authError');if(e)e.textContent=m||''}
function loadSdk(){return new Promise((resolve,reject)=>{if(window.supabase){resolve();return}const sc=document.createElement('script');sc.src='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';sc.onload=resolve;sc.onerror=reject;document.head.appendChild(sc)})}
async function afterLogin(user){currentUser=user;try{const {data,error}=await sb.from('profiles').select('display_name,is_active').eq('id',user.id).single();if(error||!data){await sb.auth.signOut();showError('Conta não configurada.');return}if(!data.is_active){await sb.auth.signOut();showError('Seu acesso está bloqueado.');return}await sb.rpc('touch_last_login');localStorage.setItem('med_user_id',user.id);if(typeof setUserStateKey==='function'){setUserStateKey(user.id);try{setup()}catch(e){console.warn(e)}}document.getElementById('authGate').style.display='none'}catch(e){console.error(e);showError('Não foi possível validar seu acesso.')}}
async function boot(){try{await loadSdk();sb=window.supabase.createClient(SUPABASE_URL,SUPABASE_KEY);const {data}=await sb.auth.getSession();if(data.session)await afterLogin(data.session.user);else document.getElementById('authGate').style.display='flex';sb.auth.onAuthStateChange((_e,s)=>{if(s)afterLogin(s.user)})}catch(e){console.error(e);showError('Falha ao iniciar autenticação.')}}
window.appLogin=async function(){showError('');const u=document.getElementById('authUsername').value.trim(),p=document.getElementById('authPassword').value;if(!u||!p){showError('Informe usuário e senha.');return}const {data,error}=await sb.auth.signInWithPassword({email:syntheticEmail(u),password:p});if(error){showError('Usuário ou senha inválidos.');return}await afterLogin(data.user)};
document.addEventListener('contextmenu',e=>e.preventDefault());document.addEventListener('copy',e=>e.preventDefault());document.addEventListener('cut',e=>e.preventDefault());document.addEventListener('dragstart',e=>e.preventDefault());window.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&['c','x','s','u','p'].includes(e.key.toLowerCase()))e.preventDefault()});
boot();})();
</script>'''.replace('__URL__',url.replace("'","\\'")).replace('__KEY__',key.replace("'","\\'"))

# Namespace local progress by authenticated user.
s = s.replace("const TOTAL_DAYS=200, KEY='med_aprovacao_roteiro_200_v126_state';", "const TOTAL_DAYS=200; const BASE_KEY='med_aprovacao_roteiro_200_v126_state'; let KEY=BASE_KEY; function setUserStateKey(uid){KEY=uid?BASE_KEY+'_'+uid:BASE_KEY;try{state=JSON.parse(safeGet(KEY,'{\\\"day\\\":1,\\\"done\\\":{}}'));}catch(e){state={day:1,done:{}};}state=state&&typeof state==='object'?state:{day:1,done:{}};state.day=Math.min(TOTAL_DAYS,Math.max(1,Number(state.day||1)));state.done=state.done&&typeof state.done==='object'?state.done:{}}")
s = s.replace("let state; try { state=JSON.parse(safeGet(KEY,'{\"day\":1,\"done\":{}}')); } catch(e) { state={day:1,done:{}}; }\nstate=state&&typeof state==='object'?state:{day:1,done:{}};\nstate.day=Math.min(TOTAL_DAYS,Math.max(1,Number(state.day||1))); state.done=state.done&&typeof state.done==='object'?state.done:{};", "let state={day:1,done:{}};")
s = s.replace('<body>', '<body class="no-copy">', 1)
s = s.replace('</body>', css + markup + js + '\n</body>', 1)
s = s.replace('<title>Med Aprovação — Roteiro Pessoal 200 Dias — V126</title>', '<title>Cronograma de Estudos APP</title>', 1)
p.write_text(s, encoding='utf-8')
print('Authentication layer injected.')
