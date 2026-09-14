from pathlib import Path

p = Path('android/app/src/main/assets/cronograma.html')
s = p.read_text(encoding='utf-8')

old_note = ('<div style="margin-top:10px" class="note">'
            'Cada bloco corresponde a um tema específico da árvore do Mapa de Estudos. '
            'A Jornada 270 define a prioridade quando há correspondência; temas sem ocorrência direta '
            'recebem classificação contextual, sem serem automaticamente rebaixados para Bronze. '
            'A marcação <b>Estudado</b> fica salva no navegador e permite distinguir imediatamente '
            'o que já foi feito do que permanece pendente.</div>')

new_note = ('<div style="margin-top:10px" class="note">'
            '<b>📚 Acompanhamento da Jornada</b>'
            '<div id="pendingPanel" style="margin-top:9px"></div>'
            '<div class="muted" style="margin-top:9px">'
            'As pendências são calculadas automaticamente pelas marcações <b>Estudado</b> '
            'e ficam acumuladas do Dia 1 até o dia atual.</div></div>')

if old_note not in s:
    raise SystemExit('Texto-base do painel não encontrado; build interrompido.')
s = s.replace(old_note, new_note, 1)

old_fn = 'function dayDone(d){return (PLAN[d-1]||[]).filter((_,i)=>state.done[key(d,i)]).length}'
new_fn = old_fn + r'''
function dayPending(d){let arr=PLAN[d-1]||[];return Math.max(0,arr.length-dayDone(d))}
function accumulatedPending(upTo){let total=0;for(let d=1;d<=Math.min(TOTAL_DAYS,upTo);d++) total+=dayPending(d);return total}
function renderPendingPanel(d,arr,done){let todayPending=Math.max(0,arr.length-done),acc=accumulatedPending(d),el=document.getElementById('pendingPanel');if(!el)return;let dayLine=arr.length?'<div style="display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap"><span>📅 <b>Este dia:</b> '+todayPending+' '+(todayPending===1?'tema pendente':'temas pendentes')+'</span><span>📊 <b>Progresso:</b> '+done+'/'+arr.length+'</span></div>':'<div>📅 <b>Este dia:</b> Dia reservado</div>';let accLine='<div style="margin-top:7px;font-size:14px"><span>🔴 <b>Pendências acumuladas:</b> '+acc+' '+(acc===1?'tema':'temas')+'</span></div>';let status=arr.length&&done===arr.length?'<div style="margin-top:7px;color:#8cf5b6;font-weight:850">🎉 Dia concluído</div>':'';el.innerHTML=dayLine+accLine+status}'''
if old_fn not in s:
    raise SystemExit('Função dayDone não encontrada; build interrompido.')
s = s.replace(old_fn, new_fn, 1)

needle = "let done=dayDone(d);document.getElementById('dayProgress').style.width"
replacement = "let done=dayDone(d);renderPendingPanel(d,arr,done);document.getElementById('dayProgress').style.width"
if needle not in s:
    raise SystemExit('Ponto de renderização do dia não encontrado; build interrompido.')
s = s.replace(needle, replacement, 1)

p.write_text(s, encoding='utf-8')
print('Pending panel patch applied:', p)
