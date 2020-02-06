import React from "react";
import ContactForm from "../contacts/contact-form/contact-form.component";
import ContactList from "../contacts/contact-list/contact-list.component";
const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactList />
      </div>
    </div>
  );
};

export default Home;
