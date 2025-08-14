'use client';
import { useMemo, useState } from 'react';
import TopCTAs from '@/components/TopCTAs';
import SearchFilter from '@/components/SearchFilter';
import PropertyCard from '@/components/PropertyCard';
import MapSection from '@/components/MapSection';
import { InvestorAreas, LuxuryAreas } from '@/components/Areas';
import Developers from '@/components/Developers';
import AboutTeam from '@/components/AboutTeam';
import LiveStats from '@/components/LiveStats';
import type { Listing, Project } from '@/lib/cms';
export default function HomeClient({ listings, projects }:{ listings:Listing[]; projects:Project[] }){
  const [filtered,setFiltered]=useState(listings);
  const topListings = useMemo(()=> (filtered.length?filtered:listings).filter(l=>l.isTop), [filtered,listings]);
  return (<>
    <TopCTAs/>
    <SearchFilter listings={listings as any} onChange={setFiltered}/>
    <section id="top-listings" className="container-bleed py-16 space-y-6">
      <h2 className="text-2xl font-semibold">Top Listings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topListings.map((l:any)=>(<PropertyCard key={l._id} p={{ id:l._id, title:l.title, location:l.location, priceAED:l.priceAED?`AED ${l.priceAED.toLocaleString()}`:'On Request', beds:l.beds||0, baths:l.baths||0, area:String(l.area||'—'), image:(l.images?.[0]||''), images:l.images, developer:l.developer }} />))}
      </div>
    </section>
    <section id="latest-projects" className="container-bleed py-16 space-y-6">
      <h2 className="text-2xl font-semibold">Latest Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.slice(0,6).map((p:any)=>(<PropertyCard key={p._id} p={{ id:p._id, title:p.name, location:`${p.developer} • ${p.location} • Handover ${p.handover}`, priceAED:'On Request', beds:0, baths:0, area:'—', image:(p.images?.[0]||''), images:p.images, developer:p.developer, handover:p.handover }} />))}
      </div>
    </section>
    <LiveStats/>
    <MapSection listings={topListings.slice(0,3) as any}/>
    <InvestorAreas/>
    <LuxuryAreas/>
    <Developers/>
    <AboutTeam/>
  </>);
}
