'use client';
import Image from 'next/image'; import { useState } from 'react';
export default function Gallery({ images }:{ images:string[] }){
  const [idx,setIdx]=useState(0); const next=()=>setIdx(i=>(i+1)%images.length); const prev=()=>setIdx(i=>(i-1+images.length)%images.length);
  return (<div className="relative h-72 sm:h-96">
    <Image src={images[idx]} alt="Gallery" fill className="object-cover"/>
    {images.length>1 && (<>
      <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full px-3 py-1">‹</button>
      <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full px-3 py-1">›</button>
    </>)}
  </div>);
}
