import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturesPage from "@/components/FeaturesPage";

export default function Home() {
  return (
    <div className="font-sans ">
      <Hero />
      <Navbar />
      <CTA />
      <FeaturesPage/>
      <Footer />
    </div>
  );
}
