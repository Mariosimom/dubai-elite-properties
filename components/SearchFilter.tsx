'use client';
import { useMemo, useState } from 'react';
export type Listing = { _id:string; title:string; location:string; priceAED:number; beds:number; baths:number; area:number; images:string[]; developer?:string; isTop?:boolean; };
export default function SearchFilter({ listings, onChange }:{ listings:Listing[]; onChange:(r:Listing[])=>void }){
  const [q,setQ]=useState(''); const [price,setPrice]=useState('any'); const [beds,setBeds]=useState('any');
  const filtered = useMemo(()=>{
    let res = listings;
    if(q.trim()){ const t=q.toLowerCase(); res = res.filter(l => [l.title,l.location,l.developer].filter(Boolean).join(' ').toLowerCase().includes(t)); }
    if(price!=='any'){ if(price==='under1') res=res.filter(l=>l.priceAED<=1_000_000);
      if(price==='1to5') res=res.filter(l=>l.priceAED>=1_000_000 && l.priceAED<=5_000_000);
      if(price==='5plus') res=res.filter(l=>l.priceAED>=5_000_000); }
    if(beds!=='any'){ const b=Number(beds); res=res.filter(l=>(l.beds||0)>=b); }
    return res;
  },[q,price,beds,listings]);
  return (
    <div className="container-bleed -mt-10 relative z-10">
      <div className="card p-3 flex flex-col sm:flex-row gap-3">
        <input placeholder="Search location, project…" value={q} onChange={e=>setQ(e.target.value)} className="flex-1 rounded-xl border px-4 py-3 outline-none focus:ring-2 ring-brand-500"/>
        <select value={price} onChange={e=>setPrice(e.target.value)} className="rounded-xl border px-3 py-3">
          <option value="any">Any price</option><option value="under1">Under 1M AED</option><option value="1to5">1M–5M AED</option><option value="5plus">5M+ AED</option>
        </select>
        <select value={beds} onChange={e=>setBeds(e.target.value)} className="rounded-xl border px-3 py-3">
          <option value="any">Any beds</option><option value="1">1+ Beds</option><option value="2">2+ Beds</option><option value="3">3+ Beds</option>
        </select>
        <button onClick={()=>onChange(filtered)} className="rounded-xl bg-brand-600 text-white px-6 py-3">Filter</button>
      </div>
    </div>
  );
}
