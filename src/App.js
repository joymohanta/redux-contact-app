import "./App.css";
import FormInput from "./components/FormInput";
import Contact from "./components/Contact";
import { useState } from "react";

function App() {
  const [editInputField, setEditInputField] = useState(false);
  const [updateContact, setUpdateContact] = useState("");

  const handleEditField = (contact) => {
    setEditInputField(true);
    setUpdateContact(contact);
  };

  const cancelUpdate = () => {
    setEditInputField(false);
  };

  return (
    <div className="App">
      <p className="fs-1 fw-bold mb-3">Redux Contact List App</p>
      <FormInput
        editInputField={editInputField}
        updateContact={updateContact}
        cancelUpdate={cancelUpdate}
      ></FormInput>
      <Contact
        handleEditField={handleEditField}
        editInputField={editInputField}
      ></Contact>
    </div>
  );
}

export default App;
