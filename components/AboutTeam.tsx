import Image from 'next/image';
export default function AboutTeam(){
  const team=[
    { name:'Mário Šimončík', role:'Founder & Lead Broker', img:'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=1000&auto=format&fit=crop' },
    { name:'Anna Petrova', role:'Senior Investment Advisor', img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop' },
    { name:'Omar Al‑Mansoori', role:'Developer Relations', img:'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop' },
  ];
  return (<section id="about" className="container-bleed py-16 space-y-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div><h2 className="text-2xl font-semibold">About Us</h2>
        <p className="text-gray-700 mt-3">Dubai Elite Properties focuses on luxury and off‑plan investments with direct developer partnerships and transparent advisory.</p></div>
      <div className="grid grid-cols-3 gap-3">
        {team.map(t=>(<div key={t.name} className="card overflow-hidden text-center">
          <div className="relative h-28"><Image src={t.img} alt={t.name} fill className="object-cover"/></div>
          <div className="p-3"><div className="font-semibold text-sm">{t.name}</div><div className="text-xs text-gray-600">{t.role}</div></div>
        </div>))}
      </div>
    </div>
  </section>);
}
