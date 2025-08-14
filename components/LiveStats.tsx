'use client';
import { useEffect } from 'react';
export default function LiveStats(){
  useEffect(()=>{
    async function run(){
      try{
        const prompt = 'Return ONLY minified JSON: { "projects":"", "units":"", "offplan":"", "yield":"", "citations":[] } with Dubai real-estate KPIs and 2-5 source URLs.';
        const r = await fetch('/api/perplexity', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ prompt }) });
        const j = await r.json();
        const content = j?.choices?.[0]?.message?.content || '';
        const match = content.match(/\{[\s\S]*\}$/);
        const data = match ? JSON.parse(match[0]) : null;
        const m=(id:string,val:string)=>{ const el=document.getElementById(id); if(el) el.textContent = val; };
        if(data){ m('stat-projects', data.projects||'—'); m('stat-units', data.units||'—'); m('stat-offplan', data.offplan||'—'); m('stat-yield', data.yield||'—');
          const c=document.getElementById('stat-citations'); if(c&&data.citations?.length){ c.innerHTML=data.citations.map((u:string)=>`<a href="${u}" target="_blank" class="underline">${u}</a>`).join(' • '); } }
      }catch(e){ console.error(e); }
    }
    run();
  },[]);
  return null;
}
