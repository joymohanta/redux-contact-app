import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactListApp/actions/ActionFile";

const FormInput = () => {
  const dispatch = useDispatch();
  const inputNameValue = useRef(null);
  const inputValue = useRef(null);
  const [nameList, setNameList] = useState("");
  const [contactList, setContactList] = useState("");

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

  return (
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
  );
};

export default FormInput;
