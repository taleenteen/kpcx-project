import Hero from "./components/Hero";
import ShowClients from "./components/ShowClients";
import Info from "./components/SectionTwo/Info";
import ServiceMap from "./components/SectionFour/ServiceMap";
import ServiceSection from "./components/SectionThree/Services";
import ShowCase from "./components/SectionFive/Showcase";
import Contact from "./components/SectionSeven/Contact";
import Accordion from "./components/SectionSix/Accordion";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <section className="p-4 mt-24">
        <div className="flex items-center justify-center">
          <Hero />
        </div>
      </section>
      <section>
        <ShowClients />
      </section>

      <section id="About">
        <Info />
      </section>
      <section id="Services">
        <ServiceSection />
      </section>

      <section>
        <ServiceMap />
      </section>

      <section>
        <ShowCase />
      </section>

      <section id="Faq">
        <Accordion />
      </section>

      <section>
        <Contact />
      </section>
    </div>
  );
}
