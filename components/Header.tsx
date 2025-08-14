"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
export default function Header(){
  const [open,setOpen]=useState(false);
  return (
  <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
    <div className="container-bleed h-[var(--header-h)] flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Dubai_Skyline_2015.jpg/640px-Dubai_Skyline_2015.jpg" alt="Logo" width={36} height={36} className="rounded-md object-cover"/>
        <div className="leading-tight">
          <div className="font-semibold">Dubai Elite Properties</div>
          <div className="text-xs text-gray-500">reliable real estate agency in UAE</div>
        </div>
      </div>
      <nav className={clsx("hidden md:flex gap-8 text-sm font-medium", open && "block")}>
        <Link href="#top-listings" className="hover:text-brand-600">Listings</Link>
        <Link href="#latest-projects" className="hover:text-brand-600">Latest</Link>
        <Link href="#map" className="hover:text-brand-600">Map</Link>
        <Link href="#about" className="hover:text-brand-600">About</Link>
        <Link href="#contact" className="hover:text-brand-600">Contact</Link>
      </nav>
      <div className="hidden md:block">
        <a href="#contact" className="inline-flex items-center rounded-xl bg-brand-600 text-white px-4 py-2">Contact</a>
      </div>
      <button className="md:hidden p-2" onClick={()=>setOpen(!open)} aria-label="Menu">☰</button>
    </div>
  </header>);
}
