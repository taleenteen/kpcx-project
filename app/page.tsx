import Image from "next/image";
import ChannelManagementSection from "./components/firstSection";
import FramerSection from "./components/Framer";
import ShowClients from "./components/ShowClients";
import Info from "./components/SectionTwo/Info";
import VisualMap from "./components/SectionFour/VisualMap";
import ServiceSection from "./components/SectionThree/Services";
import ShowCase from "./components/SectionFive/Showcase";
import Contact from "./components/SectionSeven/Contact";
import Accordion from "./components/SectionSix/Accordion";

export default function Home() {
  return (
    <div>
      {/* <section className="p-4">
        <div className="flex items-center justify-center min-h-screen">
          <FramerSection />
        </div>
      </section> */}

      <section className="mt-[100px]">
        <Info />
      </section>
      <section className="bg-blue1">
        <ServiceSection />
      </section>

      {/* <section className="mt-5">
        <VisualMap />
      </section> */}

      <section>
        <ShowCase />
      </section>

      <section>
        <ShowClients />
      </section>

      <section>
        <Accordion />
      </section>

      <section>
        <Contact />
      </section>
    </div>
  );
}
