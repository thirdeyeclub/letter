import React from "react";
import Draggable from 'react-draggable';

import "./desktop.sass";

// icons
import RememberMe from "../assets/512.png";
import Projects from "../assets/pro.png";
import Rwq from "../assets/id.png";
import liveSafe from "../assets/livesafe.png";
import Slackr from "../assets/slackr.png"
import Contact from "../assets/mail.png"
import Supp2u from "../assets/supp2u.png"

// links to primary projects
const openSlackr = () =>{window.open('https://slackrs-app.netlify.com/') }
const openLiveSafe = ()=>{window.open('https://livesafe.netlify.com/') }
const openSup = () =>{window.open('https://supp2u.netlify.com/') }

export default function Desktop() {
    return (
      <>
        <div className="desktop">
          <Draggable>
            <div className="draggable" id="drag">
              <img src={RememberMe} alt="icon" className="icon" />
              <p>About</p>
            </div>
          </Draggable>

          <Draggable>
            <div id="drag" className="draggable">
              <img src={Projects} alt="icon"  className="icon"/>
              <p>Projects</p>
            </div>
          </Draggable>

          <Draggable>
            <div id="drag" className="draggable">
              <img src={Rwq} alt="icon" className="icon"/>
              <p>Resume</p>
            </div>
          </Draggable>
          
          <Draggable>
            <div id="drag" className="draggable">
              <img src={liveSafe} alt="icon" onDoubleClick={openLiveSafe} className="icon"/>
              <p>liveSafe</p>
            </div>
          </Draggable>

          <Draggable>
            <div id="drag" className="draggable">
              <img src={Slackr} alt="icon" onDoubleClick={openSlackr} className="icon"/>
              <p>Slackr</p>
            </div>
          </Draggable>

          <Draggable>
            <div id="drag" className="draggable">
              <img src={Supp2u} alt="icon" onDoubleClick={openSup} className="icon"/>
              <p className="peCom">eCommerce</p>
            </div>
          </Draggable>

          <Draggable>
            <div id="drag" className="draggable">
              <img src={Contact} alt="icon" className="icon"/>
              <p className="pContact">Contact</p>
            </div>
          </Draggable>

        </div>
      </>
    );
  
  
}
