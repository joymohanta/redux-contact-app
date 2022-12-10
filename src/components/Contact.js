import React from "react";
import "./Contact.css";
import { useSelector } from "react-redux";
import { HiPencil, HiTrash } from "react-icons/hi";

const Contact = () => {
  const contacts = useSelector((state) => state.operationsReducer);
  console.log(contacts);
  return (
    <div className="w-25 mx-auto mt-3">
      {contacts.map((contact) => (
        <div key={contact.id}>
          <div className="d-flex justify-content-between align-items-center ">
            <p>
              {contact.name}
              <br />
              {contact.email}
            </p>
            <span>
              <HiPencil className="fs-4 me-3 editor" />
              <HiTrash className="fs-4 me-3 editor" />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contact;
