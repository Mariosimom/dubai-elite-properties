const items=[
  { name:"Emaar Properties", stat:"AED 65B+ portfolio", blurb:"Master developer behind Downtown, Dubai Marina." },
  { name:"DAMAC Properties", stat:"Luxury towers & villas", blurb:"Branded residences and premium amenities." },
  { name:"Nakheel", stat:"Palm Jumeirah creator", blurb:"Iconic waterfront communities." },
  { name:"Sobha Realty", stat:"Quality-first builds", blurb:"High-spec finishing, strong delivery track record." },
  { name:"Danube Properties", stat:"Flexible plans", blurb:"Popular monthly-style plans, accessible price points." }
];
export default function Developers(){
  return (<section id="developers" className="bg-gray-50 py-16">
    <div className="container-bleed space-y-8">
      <h2 className="text-2xl font-semibold">Featured Developers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {items.map(d=>(<div key={d.name} className="card p-5"><div className="text-lg font-semibold">{d.name}</div><div className="text-brand-600 font-medium">{d.stat}</div><p className="text-sm text-gray-600 mt-2">{d.blurb}</p></div>))}
      </div>
    </div>
  </section>);
}
