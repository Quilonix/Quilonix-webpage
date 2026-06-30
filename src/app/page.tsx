import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Products from "@/components/sections/Products";
import Process from "@/components/sections/Process";
import WhyUs from "@/components/sections/WhyUs";
import TechStack from "@/components/sections/TechStack";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import StructuredData from "@/components/SEO/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main className="flex-1 w-full flex flex-col">
        <Hero />
        <About />
        <Services />
        <Products />
        <Process />
        <WhyUs />
        <TechStack />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
