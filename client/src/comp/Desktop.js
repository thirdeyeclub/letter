import React from "react";
import "./desktop.sass";

//icons
import RememberMe from "../assets/512.png";
import Projects from "../assets/pro.png";
import Rwq from "../assets/id.png";
import liveSafe from "../assets/livesafe.png";
import Slackr from "../assets/slackr.png"
import Contact from "../assets/mail.png"


const openSlackr = () =>{window.location.href = 'https://slackrs-app.netlify.com/'}

const openLiveSafe = ()=>{window.location.href ='https://livesafe.netlify.com/'}
export default function Desktop() {
  

    return (
      <>
        <div className="desktop">

            <div className="draggable" id="drag">
              <img src={RememberMe} alt="x" />
              <h5>About Me</h5>
            </div>

            <div id="drag" className="draggable">
              <img src={Projects} alt="x" />
              <h5>Projects</h5>
            </div>

            <div id="drag" className="draggable">
              <img src={Rwq} alt="x"/>
              <h5>Resume</h5>
            </div>

            <div id="drag" className="draggable">
              <img src={liveSafe}alt="x" onDoubleClick={openLiveSafe}/>
              <h5>liveSafe</h5>
            </div>

        
            <div id="drag" className="draggable">
              <img src={Slackr}alt="x" onDoubleClick={openSlackr}/>
              <h5>Slackr</h5>
            </div>

          <div id="drag" className="draggable">
              <img src={Contact} alt="x"/>
              <h5>Contact</h5>
          </div>

        </div>
      </>
    );
  
  
}

