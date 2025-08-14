import Image from "next/image";
export default function Hero(){
  return (
    <section className="relative h-[78vh] min-h-[560px] w-full">
      <Image src="https://images.unsplash.com/photo-1546412414-8035e1776c9a?q=80&w=1887&auto=format&fit=crop" alt="Dubai" fill className="object-cover" priority/>
      <div className="absolute inset-0 bg-black/50"/>
      <div className="relative container-bleed h-full flex flex-col items-center justify-center text-center text-white gap-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight">Luxury Real Estate & Off-Plan Investments in Dubai</h1>
        <p className="max-w-2xl text-white/90">Curated residences in Downtown, Palm Jumeirah, Dubai Marina and more — from AED 750,000 to AED 35,000,000.</p>
      </div>
    </section>
  );
}
