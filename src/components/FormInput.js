import React, { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  addContact,
  handleUpdateSubmit,
} from "../redux/contactListApp/actions/ActionFile";

const FormInput = ({ editInputField, updateContact, cancelUpdate }) => {
  const dispatch = useDispatch();
  const inputNameValue = useRef(null);
  const inputValue = useRef(null);
  const [nameList, setNameList] = useState("");
  const [contactList, setContactList] = useState("");

  const [contactValue, setContactValue] = useState("");
  useEffect(() => {
    setContactValue(updateContact.email);
    // console.log(updateContact);
  }, [updateContact]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputName = inputNameValue.current.value;
    const inputEmail = inputValue.current.value;
    let date = new Date();
    let time = date.getTime();
    let contactObject = {
      id: time,
      name: inputName,
      email: inputEmail,
    };
    // console.log(inputName, inputEmail);
    dispatch(addContact(contactObject));
    setContactList("");
    setNameList("");
  };

  const updateSubmit = (event) => {
    event.preventDefault();

    let updatedObject = {
      id: updateContact.id,
      name: updateContact.name,
      email: contactValue,
    };
    dispatch(handleUpdateSubmit(updatedObject));
  };

  return (
    <>
      {editInputField === false ? (
        <div>
          <Form className="w-25 mx-auto" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="d-flex ">Your name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                ref={inputNameValue}
                value={nameList}
                onChange={(event) => setNameList(event.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="d-flex ">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                ref={inputValue}
                value={contactList}
                onChange={(event) => setContactList(event.target.value)}
                required
              />
            </Form.Group>

            <Button className="d-flex " variant="primary" type="submit">
              Create
            </Button>
          </Form>
        </div>
      ) : (
        <div>
          <Form className="w-25 mx-auto" onSubmit={updateSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="d-flex ">Update Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Update email"
                ref={inputValue}
                value={contactValue || ""}
                onChange={(event) => setContactValue(event.target.value)}
                required
              />
            </Form.Group>

            <Button className="d-flex " variant="primary" type="submit">
              Update
            </Button>
            <Button
              onClick={cancelUpdate}
              className="d-flex mt-2"
              variant="secondary"
              type="button"
            >
              Back
            </Button>
          </Form>
          {/* <br /> */}
        </div>
      )}
    </>
  );
};

export default FormInput;
