import React from "react";
import Banner from "../components/Contacts/Banner";
import ContactForm from "../components/Contacts/ContactForm";
import ContactNav from "../components/Contacts/ContactNav";

function ContactPage() {
  return (
    <div>
      <ContactNav />
      <section className="mt-[100px]">
        <Banner />
      </section>
      <section className="bg-gray1">
        <ContactForm />
      </section>
    </div>
  );
}

export default ContactPage;
