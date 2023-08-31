import React from "react";
import { useState } from "react";
import "./App.css";
import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  // const[btn , setBtn] = useState('Dark Mode')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode hase been Enable ", "primary");
    }
    // setBtn('Light Mode')
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode hase been Enable ", "primary");
    }
    // setBtn('Dark Mode')
  };
  return (
    <>
      <Navbar tittle="TextUtiles" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter our text to analyze"
          mode={mode}
        />
        <About   mode={mode}  />
      </div>
    </>
  );
}

export default App;
