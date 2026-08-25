import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutExperience from "@/components/AboutExperience";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-[#d7d2c0]">
      <Navbar />
      <Hero />
      <AboutExperience />
      <Services />
      <Projects />
      <FAQ />
      <Contact />
    </div>
  );
}
