import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="font-sans ">
     <Hero/>
     <Navbar/>
     <CTA/>
    </div>
  );
}
