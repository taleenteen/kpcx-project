import React from "react";
import Banner from "../components/Contacts/Banner";
import ContactForm from "../components/Contacts/ContactForm";
import Link from "next/link";

function ContactPage() {
  return (
    <div>
      <section className="flex justify-center">
        <div className="h-[200px] w-[200px] hover:scale-110 transition-all duration-300">
          <Link href="/" passHref>
            <img
              src="Logo.png"
              alt="Logo"
              className="w-full h-full object-contain"
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
