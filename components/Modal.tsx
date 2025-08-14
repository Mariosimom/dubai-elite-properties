'use client';
import { ReactNode, useEffect } from 'react';
export default function Modal({ open, onClose, children }:{ open:boolean; onClose:()=>void; children:ReactNode; }){
  useEffect(()=>{ const onKey=(e:KeyboardEvent)=> e.key==='Escape' && onClose(); document.addEventListener('keydown',onKey); return()=>document.removeEventListener('keydown',onKey);},[onClose]);
  if(!open) return null;
  return (<div className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-4" onClick={onClose}>
    <div className="card max-w-4xl w-full overflow-hidden" onClick={e=>e.stopPropagation()}>{children}</div>
  </div>);
}
