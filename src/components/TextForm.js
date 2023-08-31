import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase!!!" , "success")
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase!!!" , "warning")
  };
  const clear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("your message has beeen cleared!!!" , "primary")
  };
  // const speak = () => {
  //   let msg = new SpeechSynthesisUtterance();
  //   msg.text = text
  //   window.speechSynthesis.speak(msg)
  // };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // text = "wrong method to change text"
  //   setText("Now..this is right methos to change text");
  return (
    <>
      <div className="container " style={{color: props.mode === "dark" ? "white" : "black"}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "black" , color: props.mode === "dark" ? "white" : "black"
            }}

          ></textarea>
        </div>
        <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Uppercase
        </button>
        <button  disabled={text.length ===0}  className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Lowercase
        </button>
        <button  disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={clear}>
          Clear
        </button>
        {/* <button className="btn btn-primary mx-1 my-1" onClick={speak}>
          Speak
          </button>*/}
      </div>
      <div className="container my-3" style={{color: props.mode === "dark" ? "white" : "black"}}>
        <h2>Your Text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length}words and {text.length} charachters
        </p>
        <p>
          <b>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} minitus to read</b>
        </p>
        <h4>Preview</h4>
        <p>{text}</p>
        <p>{text.length>0 ? text:"Enter something to preview it here "}</p>
      </div>
    </>
  );
}
