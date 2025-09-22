import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans ">
      <Hero />
      <Navbar />
      <CTA />
      <Footer />
    </div>
  );
}
