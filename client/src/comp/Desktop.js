import React, { Component } from "react";
import interact from "interactjs";
import "./desktop.sass";

//icons
import RememberMe from "../assets/512.png";
import Projects from "../assets/pro.png";
import Rwq from "../assets/id.png";
import liveSafe from "../assets/livesafe.png";
import Slackr from "../assets/slackr.png"
//draggle funtion
interact(".draggable").draggable({
  // enable inertial throwing
  inertia: false,
  // keep the element within the area of it's parent
  modifiers: [
    interact.modifiers.restrictRect({
      restriction: "parent",
      endOnly: true
    })
  ],
  // enable autoScroll
  autoScroll: true,

  // call this function on every dragmove event
  onmove: dragMoveListener,
  // call this function on every dragend event
  onend: function(event) {
    var textEl = event.target.querySelector("p");

    textEl &&
      (textEl.textContent =
        "moved a distance of " +
        Math.sqrt(
          (Math.pow(event.pageX - event.x0, 2) +
            Math.pow(event.pageY - event.y0, 2)) |
            0
        ).toFixed(2) +
        "px");
  }
});

function dragMoveListener(event) {
  var target = event.target;
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
  var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

  // translate the element
  target.style.webkitTransform = target.style.transform =
    "translate(" + x + "px, " + y + "px)";

  // update the posiion attributes
  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
}

// this is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener;


const openSlackr = () =>{window.location.href = 'https://slackrs-app.netlify.com/'}

const openLiveSafe = ()=>{window.location.href ='https://livesafe.netlify.com/'}
export default class Desktop extends Component {
  render() {
    return (
      <>
        <div className="desktop">
          <div class="draggable">
            <div id="drag-1">
              <img src={RememberMe} />
              <h3>About Me</h3>
            </div>
          </div>

          <div class="draggable">
            <div id="drag-2">
              <img src={Projects} />
              <h3>Projects</h3>
            </div>
          </div>

          <div class="draggable">
            <div id="drag-2">
              <img src={Rwq} />
              <h3>Resume</h3>
            </div>
          </div>

          <div class="draggable">
            <div id="drag-2">
              <img src={liveSafe} onDoubleClick={openLiveSafe}/>
              <h3>liveSafe</h3>
            </div>
          </div>

          <div class="draggable" onDoubleClick={openSlackr}>
            <div id="drag-2" >
              <img src={Slackr} />
              <h3>Slackr</h3>
            </div>
          </div>

        </div>
      </>
    );
  }
}
