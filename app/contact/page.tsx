import React from "react";
import Image from "next/image";
import Banner from "../components/Contacts/Banner";
import ContactForm from "../components/Contacts/ContactForm";
import Link from "next/link";

function ContactPage() {
  return (
    <div>
      <section className="flex justify-center">
        <div className="h-[200px] w-[200px] hover:scale-110 transition-all duration-300 mt-4">
          <Link href="/" passHref>
            <Image
              src="/Logo.png"
              alt="Logo"
              width={200}
              height={200}
              className="object-contain"
            />
          </Link>
        </div>
      </section>
      <section>
        <Banner />
      </section>
      <section className="bg-gray1">
        <ContactForm />
      </section>
    </div>
  );
}

export default ContactPage;
