import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import HomeClient from "@/components/HomeClient";
import { getListings, getProjects } from "@/lib/cms";
export default async function Home(){
  const listings = await getListings();
  const projects = await getProjects();
  return (
    <div className="relative">
      <Header/>
      <main className="pt-[var(--header-h)]">
        <Hero/>
        <HomeClient listings={listings as any} projects={projects as any} />
      </main>
      <Footer/>
    </div>
  );
}
