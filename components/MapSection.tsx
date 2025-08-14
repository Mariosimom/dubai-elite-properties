'use client';
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

type ListingLite = { _id: string; title: string; location: string; lat?: number; lng?: number };

function guess(location: string): [number, number] | null {
  const L = location.toLowerCase();
  if (L.includes('downtown')) return [55.277, 25.197];
  if (L.includes('palm')) return [55.137, 25.112];
  if (L.includes('marina')) return [55.142, 25.081];
  if (L.includes('business bay')) return [55.271, 25.185];
  if (L.includes('jbr') || L.includes('jumeirah beach')) return [55.141, 25.080];
  if (L.includes('meydan')) return [55.301, 25.154];
  if (L.includes('dubai harbour')) return [55.140, 25.090];
  return null;
}

export default function MapSection({
  provider = 'mapbox',
  listings = [],
}: {
  provider?: 'mapbox' | 'google';
  listings?: ListingLite[];
}) {
  const mapRef = useRef<HTMLDivElement>(null);

  // Read NEXT_PUBLIC_* only (these are safe on the client)
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
  const googleKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const shouldUseMapbox = provider === 'mapbox' && !!mapboxToken;

  useEffect(() => {
    if (!shouldUseMapbox) return;

    (mapboxgl as any).accessToken = mapboxToken!;

    let map: mapboxgl.Map | null = null;
    try {
      map = new mapboxgl.Map({
        container: mapRef.current!,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [55.2708, 25.2048],
        zoom: 10,
      });

      listings.slice(0, 5).forEach((l) => {
        const ll = l.lng != null && l.lat != null ? [l.lng, l.lat] : guess(l.location);
        if (!ll) return;
        const el = document.createElement('div');
        el.className = 'rounded-full bg-white text-[10px] px-2 py-1 shadow';
        el.innerText = 'AED';
        new mapboxgl.Marker({ element: el })
          .setLngLat(ll as [number, number])
          .setPopup(new mapboxgl.Popup({ offset: 12 }).setHTML(`<strong>${l.title}</strong><br/>${l.location}`))
          .addTo(map!);
      });
    } catch (e) {
      console.error('Mapbox init failed, falling back to Google iframe:', e);
    }

    return () => {
      if (map) map.remove();
    };
  }, [shouldUseMapbox, listings, mapboxToken]);

  return (
    <section id="map" className="container-bleed py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card overflow-hidden h-[420px]">
          {shouldUseMapbox ? (
            <div ref={mapRef} className="w-full h-full" />
          ) : (
            <iframe
              title="Dubai Map"
              src={`https://www.google.com/maps/embed/v1/place?key=${googleKey || ''}&q=Dubai`}
              className="w-full h-full border-0"
              loading="lazy"
            />
          )}
        </div>
        <div className="card bg-brand-800 text-white p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Dubai Market Snapshot</h3>
            <div className="text-sm text-white/80 mb-6">Live stats fetched via Perplexity if configured.</div>
            <dl className="grid grid-cols-2 gap-6">
              <div>
                <dt className="text-white/60 text-sm">New Projects</dt>
                <dd className="text-2xl font-semibold" id="stat-projects">
                  —
                </dd>
              </div>
              <div>
                <dt className="text-white/60 text-sm">Units/day</dt>
                <dd className="text-2xl font-semibold" id="stat-units">
                  —
                </dd>
              </div>
              <div>
                <dt className="text-white/60 text-sm">Off-plan Share</dt>
                <dd className="text-2xl font-semibold" id="stat-offplan">
                  —
                </dd>
              </div>
              <div>
                <dt className="text-white/60 text-sm">Rental Yield</dt>
                <dd className="text-2xl font-semibold" id="stat-yield">
                  —
                </dd>
              </div>
            </dl>
          </div>
          <div className="text-xs text-white/70 mt-6" id="stat-citations">
            *Citations load when API is configured.
          </div>
        </div>
      </div>
    </section>
  );
}
