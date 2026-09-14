#!/usr/bin/env python3
import json
from collections import Counter, defaultdict, deque
from pathlib import Path
HTML=Path('android/app/src/main/assets/cronograma.html')
text=HTML.read_text(encoding='utf-8'); prefix='const PLAN='
start=text.index(prefix)+len(prefix); plan,end=json.JSONDecoder().raw_decode(text[start:])
content=plan[:150]; sizes=[len(day) for day in content]
items=[u for day in content for u in day if not u.get('review')]
counts=Counter(u.get('area','') for u in items); total=len(items)
areas=sorted(counts); target={a:counts[a]/total for a in areas}
pools={}
for area in areas:
    by_parent=defaultdict(deque)
    for u in items:
        if u.get('area')==area: by_parent[u.get('parent','')].append(u)
    q=deque(sorted(by_parent,key=lambda p:(-len(by_parent[p]),p))); seq=[]
    while q:
        p=q.popleft(); seq.append(by_parent[p].popleft())
        if by_parent[p]: q.append(p)
    pools[area]=seq
remaining=counts.copy(); used=Counter(); pos=Counter(); new_content=[]; prev_area=None; prev_parent=None
for size in sizes:
    chosen=[]
    for _ in range(size):
        cand=[a for a in areas if remaining[a]>0 and a not in chosen]
        def score(a):
            u=pools[a][pos[a]]
            return used[a]/target[a]+(0.35 if a==prev_area else 0)+(0.25 if u.get('parent','')==prev_parent else 0)
        a=min(cand,key=score); u=pools[a][pos[a]]
        chosen.append(a); used[a]+=1; remaining[a]-=1; prev_area=a; prev_parent=u.get('parent','')
    new_content.append([pools[a][pos[a]] for a in chosen])
    for a in chosen: pos[a]+=1
assert sum(map(len,new_content))==total
assert not any(remaining.values())
plan=new_content+plan[150:]
new_json=json.dumps(plan,ensure_ascii=False,separators=(',',':'))
HTML.write_text(text[:start]+new_json+text[start+end:],encoding='utf-8')
print(f'OK: {total} themes reorganized across 150 content days; 50 review days preserved.')
print('Areas:',dict(counts))
