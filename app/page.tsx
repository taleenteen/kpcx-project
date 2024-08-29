import FramerSection from "./components/Framer";
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
          <FramerSection />
        </div>
      </section>

      <section id="About" className="bg-gradient-to-b from-white to-blue1">
        <Info />
      </section>
      <section id="Services" className="bg-blue1">
        <ServiceSection />
      </section>

      <section id="Channels" className="">
        <ServiceMap />
      </section>

      <section>
        <ShowCase />
      </section>

      <section className="mb-12">
        <ShowClients />
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
