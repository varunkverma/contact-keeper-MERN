import React, { Fragment, useContext } from "react";

import ContactContext from "../../../context/contact/contactContext";
import ContactItem from "../contact-item/contact-item.component";
const ContactList = () => {
  const contactContext = useContext(ContactContext);

  const { contacts } = contactContext;

  return (
    <Fragment>
      {contacts.map(contact => (
        <h3 key={contact.key}>
          <ContactItem contact={contact} />
        </h3>
      ))}
    </Fragment>
  );
};

export default ContactList;
