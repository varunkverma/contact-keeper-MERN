import React from "react";
import ContactList from "../contacts/contact-list/contact-list.component";
const Home = () => {
  return (
    <div className="grid-2">
      <div>form</div>
      <div>
        <ContactList />
      </div>
    </div>
  );
};

export default Home;
