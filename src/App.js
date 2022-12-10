import logo from "./logo.svg";
import "./App.css";
import FormInput from "./components/FormInput";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <p className="fs-1 fw-bold mb-3">Redux Contact List App</p>
      <FormInput></FormInput>
      <Contact></Contact>
    </div>
  );
}

export default App;
