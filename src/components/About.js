
import React ,{ useState } from "react";

export default function About(props) {

  const[myStyle,setMyStyle] = useState(
    {
    color : 'white',
    backgroundColor : 'black',
    border : ' 1px solid white'
  }
  )
  const[btntext,setBtnText] = useState("Enable light Mode")
  // const toggleStyle = ()=>{
  //   if (myStyle.color ==='white') {
  //       setMyStyle({
  //           color : 'black',
  //           backgroundColor : 'white'
  //       }
  //       )
  //       setBtnText("Enable Dark Mode")
  //   }
  //   else{
  //       setMyStyle({
  //           color : 'white',
  //           backgroundColor : 'black',
  //           border : ' 1px solid white'
  //       }
  //       )
  //       setBtnText("Enable Light Mode")
  //   }
  // }
  
  return (
    <div className="container" style={{backgroundColor : props.mode ==='dark' ? 'grey' : 'white',color : props.mode ==='dark' ? 'white' : 'black'}}>
      <h1 className="my-2">About Us</h1>
      <div className="accordion" id="accordionExample" style ={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{backgroundColor : props.mode ==='dark' ? 'grey' : 'white',color : props.mode ==='dark' ? 'white' : 'black'}}
            >
              Contact Us:
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor : props.mode ==='dark' ? 'grey' : 'white',color : props.mode ==='dark' ? 'white' : 'black'}}>
            
            Got questions, feedback, or suggestions? We'd love to hear from you. Reach out to our support team at 
            support@yourappname.com or visit our website www.textutils.com for more information.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{backgroundColor : props.mode ==='dark' ? 'grey' : 'white',color : props.mode ==='dark' ? 'white' : 'black'}}
            >
              Features:
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor : props.mode ==='dark' ? 'grey' : 'white',color : props.mode ==='dark' ? 'white' : 'black'}}>
            <ul>
              <li>
              Sleek and Intuitive Interface: Our minimalist design ensures that you can focus on your words without any distractions. The clean layout enhances your creativity and productivity.
              </li>
              <li>
              Rich Text Editing: Format your text effortlessly with our range of formatting tools. Bold, italicize, underline, or even add headings to your content with a single click.
              </li>
              <li>
              Real-time Collaboration: Collaborate seamlessly with others in real time. Whether you're working on a group project or co-authoring an article, our collaborative features keep everyone on the same page.
              </li>
              <li>
              Cloud Sync: Access your documents from anywhere, on any device. With cloud synchronization, your work is always up to date, whether you're on your computer, tablet, or smartphone.
              </li>
              <li>
              Customizable Themes: Personalize your writing environment with a variety of themes. Whether you prefer a dark or light interface, we have the perfect theme for you.
              </li>
            </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{backgroundColor : props.mode ==='dark' ? 'grey' : 'white',color : props.mode ==='dark' ? 'white' : 'black'}}
            >
              Our Vision:
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor : props.mode ==='dark' ? 'grey' : 'white',color : props.mode ==='dark' ? 'white' : 'black'}}>
            
At TextUtils, our vision is to provide a seamless and enjoyable writing experience that empowers individuals and teams to create their best work. We believe that every word matters, and that's why we've designed an editor that caters to your unique needs.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
       {/* <button  type="button" className="btn btn-primary" onClick={toggleStyle} >{btntext}</button>  */}
      </div>
      
    </div>
  );
}
