import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../../context/contact/contactContext";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filterContacts, clearFilter, filtered } = contactContext;

  const text = useRef("");

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const handleOnChange = e => {
    if (text.current.value !== "") {
      console.log(text.current);
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter contacts..."
        onChange={handleOnChange}
      />
    </form>
  );
};

export default ContactFilter;
