import Image from 'next/image';
function AreaCard({ name, img, blurb }:{ name:string; img:string; blurb:string; }){
  return (<div className="card overflow-hidden">
    <div className="relative h-40"><Image src={img} alt={name} fill className="object-cover"/></div>
    <div className="p-4"><div className="font-semibold">{name}</div><div className="text-sm text-gray-600">{blurb}</div></div>
  </div>);
}
export function InvestorAreas(){
  return (<section id="investor-areas" className="container-bleed py-16 space-y-6">
    <h2 className="text-2xl font-semibold">Top Investor Areas</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <AreaCard name="Dubai Islands" img="https://images.unsplash.com/photo-1505692952049-1a78307da8f3?q=80&w=1600&auto=format&fit=crop" blurb="Emerging masterplan with long-term potential."/>
      <AreaCard name="Dubai South" img="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1600&auto=format&fit=crop" blurb="Expo legacy, logistics hub, airport corridor."/>
      <AreaCard name="Meydan" img="https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=1600&auto=format&fit=crop" blurb="New launches with flexible payment plans."/>
    </div>
  </section>);
}
export function LuxuryAreas(){
  return (<section id="luxury-areas" className="container-bleed py-16 space-y-6">
    <h2 className="text-2xl font-semibold">Top Luxury Areas</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <AreaCard name="Palm Jumeirah" img="https://images.unsplash.com/photo-1474511014201-b83966705988?q=80&w=1600&auto=format&fit=crop" blurb="Ultra-luxury beachfront villas & apartments."/>
      <AreaCard name="Jumeirah Bay" img="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop" blurb="Bulgari branded lifestyle, limited supply."/>
      <AreaCard name="Downtown Dubai" img="https://images.unsplash.com/photo-1546412414-8035e1776c9a?q=80&w=1887&auto=format&fit=crop" blurb="Iconic towers, Burj Khalifa views."/>
    </div>
  </section>);
}
