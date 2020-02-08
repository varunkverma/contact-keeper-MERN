import React from "react";
import ContactForm from "../contacts/contact-form/contact-form.component";
import ContactList from "../contacts/contact-list/contact-list.component";
import ContactFilter from "../contacts/contact-filter/contact-filter.component";

const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <ContactList />
      </div>
    </div>
  );
};

export default Home;
