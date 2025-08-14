export default function Footer(){
  return (
    <footer id="contact" className="bg-gray-950 text-white">
      <div className="container-bleed py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div><div className="font-semibold text-lg">Dubai Elite Properties</div>
          <p className="text-sm text-white/70 mt-2">Reliable real estate agency in UAE.</p></div>
        <div><div className="font-semibold">Links</div>
          <ul className="mt-3 space-y-2 text-white/80 text-sm">
            <li><a href="#top-listings" className="hover:underline">Listings</a></li>
            <li><a href="#latest-projects" className="hover:underline">Latest Projects</a></li>
            <li><a href="#map" className="hover:underline">Map</a></li>
          </ul></div>
        <div><div className="font-semibold">Contact</div>
          <ul className="mt-3 space-y-2 text-white/80 text-sm">
            <li>Phone: +971 56 823 6024</li><li>Email: hello@dubai-elite.ae</li><li>Office: Dubai, UAE</li>
          </ul></div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-bleed py-4 text-xs text-white/60">© {new Date().getFullYear()} Dubai Elite Properties.</div>
      </div>
    </footer>
  );
}
