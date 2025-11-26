import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageTransition from "@/components/ui/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <main className="bg-bg min-h-screen text-white selection:bg-primary selection:text-bg" suppressHydrationWarning>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <TechStack />
        <Testimonials />
        <CTA />
        <Contact />
        <Footer />
      </main>
    </PageTransition>
  );
}
