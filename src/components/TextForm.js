import React, { useState } from "react";

export default function TextForm(props) {
const handleUpClick = ()=>{
   // console.log("uppercase button click");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase","success");
}

const handleLoClick = ()=>{
    // console.log("uppercase button click");
     let newText = text.toLowerCase();
     setText(newText);
     props.showAlert("converted to Lowercase","success");
 }

const handleCopy =()=>{
   var Newtext  = document.getElementById("myBox");
   Newtext.select()
   navigator.clipboard.writeText(Newtext.value)
   props.showAlert("Message copied succesfully","success");
}
const handleOnChange = (event)=>{
   // console.log("On Change");
    setText(event.target.value);
}
  const [text, setText] = useState("");
  //  text = 'wrong text'// wrong way
  //   setText("you are right");
  return ( 
    <>
    <div className="container"  style={{color : props.mode ==='dark' ? 'white' : 'black'}}>
      <h2>{props.heading}</h2>
      <div className="mb-3">  
        <textarea className="form-control" value = {text} onChange ={handleOnChange}  style={{backgroundColor : props.mode ==='dark' ? 'grey' : 'white',color : props.mode ==='dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}> Convert to UpperCase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}> Convert to LowerCase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleCopy}> COPY </button>
      </div>
    </div>
    <div className="container my-3" >
        <h1>Your text summary</h1>
    <p>{text.split(" ").length}words and {text.length} characters</p>
    <p>{0.008*(text.split(" ").length)}</p>
    <h2>Preview</h2>
    <p>{text.length > 0 ? text : "enter the text to preview"}</p>
    </div>
    </>
    
  );
}
