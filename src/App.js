import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";
// import {
//   BrowserRouter ,
//   Routes,
//   Route
// } from "react-router-dom"; 

function App() {
  const [mode, setmode] = useState("light"); // dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() =>setAlert(null),1500);

  };

const togglemode = () => {
  if (mode === "light") {
    setmode("dark");
    document.body.style.backgroundColor = "grey";
    showAlert("dark mode has been enaled !", "success");
    document.title = "TextUtils- darkmode";
  } else {
    setmode("light");
    document.body.style.backgroundColor = "white";
    showAlert("light mode has been enaled !", "success");
    document.title = "TextUtils- lightmode";
  }
};
return (
  <>
    {/* <BrowserRouter> */}
    <Navbar 
          title="TextUtils"
          aboutText="About text"
          mode={mode}
          togglemode={togglemode}
    />
        <Alert alert={alert} />
        <div className="container my-3">

        {/* using exact path as it check whole word 
          /user1 -->component 1
          /user1/user2 -->component 2
          */}
        {/* <Routes>
        <Route exact path="/about" element={<About mode={mode}/>}></Route>
            <Route
              exact path="/"
              element={ */}
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
              {/* }
            ></Route>
        </Routes>  */}
        </div>
    {/* </BrowserRouter> */}
    

  </>
);
}
export default App;
