export default function TopCTAs(){
  return (
    <div className="container-bleed -mt-10 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a href="#top-listings" className="card p-6 text-center font-semibold hover:shadow-lg transition">Go to Listings</a>
        <a href="#latest-projects" className="card p-6 text-center font-semibold hover:shadow-lg transition">Go to Latest Projects</a>
      </div>
    </div>
  );
}
