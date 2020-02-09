import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../../context/contact/contactContext";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);

  const { current } = contactContext;
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { _id, name, email, type, phone } = contact;

  const handleDelete = () => {
    if (contact === current) clearCurrent();
    deleteContact(_id);
  };
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={`badge ${
            type === "professional" ? "badge-success" : "badge-primary"
          }`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <div className="text-left">
        <ul className="list">
          {email && (
            <li>
              <i className="fas fa-envelope-open"></i> {email}
            </li>
          )}
          {phone && (
            <li>
              <i className="fas fa-phone"></i> {phone}
            </li>
          )}
        </ul>
        <p>
          <button
            className="btn btn-dark btn-sm text-left"
            onClick={() => setCurrent(contact)}
          >
            Edit
          </button>
          <button className="btn btn-danger btn-sm" onClick={handleDelete}>
            Delete
          </button>
        </p>
      </div>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
