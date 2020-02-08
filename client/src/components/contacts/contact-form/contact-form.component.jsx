import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../../context/contact/contactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, clearCurrent, updateContact, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal"
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal"
  });

  const { name, email, phone, type } = contact;

  const handleOnChange = e => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });
  };

  const clearAll = () => {
    clearCurrent();
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (current) {
      updateContact(contact);
    } else {
      addContact(contact);
    }
    setContact({
      name: "",
      email: "",
      phone: "",
      type: "personal"
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-primary">{current ? "Edit" : "Add"} Contact</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={handleOnChange}
        required
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleOnChange}
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="phone"
        value={phone}
        onChange={handleOnChange}
        required
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === "personal"}
        onChange={handleOnChange}
      />{" "}
      Personal{" "}
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === "professional"}
        onChange={handleOnChange}
      />{" "}
      Professional
      <div>
        <input
          type="submit"
          value={current ? "Update Contact" : "Add Contact"}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <button className="btn btn-light btn-block" onClick={clearAll}>
          Clear
        </button>
      )}
    </form>
  );
};

export default ContactForm;
