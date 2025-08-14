'use client';
import Image from "next/image";
import Modal from "./Modal";
import Gallery from "./Gallery";
import { useState } from "react";

const PLACEHOLDER =
  "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&auto=format&fit=crop&w=1600";

export type Property = {
  id: string; title: string; location: string; priceAED: string; beds: number; baths: number; area: string;
  image: string; images?: string[];
  reraNo?: string; permitNo?: string; dedLicense?: string; brokerReraCard?: string; serviceCharges?: string;
  paymentPlan?: { label: string; value: string }[]; handover?: string; developer?: string; amenities?: string[];
};

export default function PropertyCard({ p }: { p: Property }) {
  const [open, setOpen] = useState(false);
  const imageSrc = p.image && p.image.trim() ? p.image : PLACEHOLDER;
  const gallery = (p.images && p.images.length ? p.images : [imageSrc]).map((u) => (u && u.trim() ? u : PLACEHOLDER));
  // ...then use imageSrc and gallery below
  return (<>
    <div className="card overflow-hidden cursor-pointer" onClick={()=>setOpen(true)}>
      <div className="relative h-48"><Image src={p.image} alt={p.title} fill className="object-cover" sizes="(min-width:1024px) 33vw, 100vw"/></div>
      <div className="p-4 space-y-2">
        <h3 className="font-semibold">{p.title}</h3>
        <div className="text-sm text-gray-500">{p.location}</div>
        <div className="text-brand-600 font-semibold">{p.priceAED}</div>
        <div className="text-sm text-gray-600">{p.beds} Beds • {p.baths} Baths • {p.area} m²</div>
      </div>
    </div>
    <Modal open={open} onClose={()=>setOpen(false)}>
      <Gallery images={p.images || [p.image]} />
      <div className="p-4 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <div className="text-sm text-gray-500">{p.location}</div>
            {p.developer && <div className="text-sm text-gray-600">Developer: {p.developer}</div>}
            {p.handover && <div className="text-sm text-gray-600">Handover: {p.handover}</div>}
          </div>
          <div className="text-brand-600 font-semibold">{p.priceAED}</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="card p-3">
            <div className="font-semibold mb-2">Compliance</div>
            <ul className="space-y-1 text-gray-700">
              <li>RERA No.: {p.reraNo || '—'}</li>
              <li>Permit No.: {p.permitNo || '—'}</li>
              <li>DED License: {p.dedLicense || '—'}</li>
              <li>Broker RERA Card: {p.brokerReraCard || '—'}</li>
            </ul>
          </div>
          <div className="card p-3">
            <div className="font-semibold mb-2">Financials</div>
            <ul className="space-y-1 text-gray-700">
              <li>Service Charges: {p.serviceCharges || '—'}</li>
              <li>Area: {p.area || '—'} m²</li>
              <li>Beds/Baths: {p.beds} / {p.baths}</li>
            </ul>
          </div>
        </div>
        {p.paymentPlan?.length ? (
          <div className="card p-3 text-sm">
            <div className="font-semibold mb-2">Payment Plan</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {p.paymentPlan.map((step,i)=>(<li key={i}><strong>{step.label}:</strong> {step.value}</li>))}
            </ul>
          </div>
        ):null}
        {p.amenities?.length ? (
          <div className="text-sm text-gray-700">
            <div className="font-semibold">Amenities</div>
            <div className="mt-1 flex flex-wrap gap-2">
              {p.amenities.map((a,i)=>(<span key={i} className="px-2 py-1 rounded-full bg-gray-100 text-gray-700">{a}</span>))}
            </div>
          </div>
        ):null}
        <div className="mt-2 flex justify-end"><a href="#contact" className="rounded-xl bg-brand-600 text-white px-4 py-2">Enquire</a></div>
      </div>
    </Modal>
  </>);
}
