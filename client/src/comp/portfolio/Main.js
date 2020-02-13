import React, { useState } from "react";
import Particles from "react-particles-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn,faGithub,   faReact, faNode,    faJs,   faSass, faGitAlt} from "@fortawesome/free-brands-svg-icons";
import {faDownload,faChevronCircleDown,faCode, faInfoCircle,faPlayCircle,faHeart, faEnvelope} from "@fortawesome/free-solid-svg-icons";
// import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component";
import ReactCardFlip from "react-card-flip";
import "react-vertical-timeline-component/style.min.css";
import "./main.css";

// import ContactMe from '../../assets/contact.svg'

const postgres = require("./images/postgresql.png");
const resume = require("./resume/Taylor_Blount's_resume_2020.pdf");

// contorls all the particles
let particleconfig = {
  particles: {
    number: {
      value: 10,
      density: {
        enable: true,
        value_area: 111
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "polygon",
      stroke: {
        width: 1,
        color: "#000000"
      },
      polygon: {
        nb_sides: 9
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 137,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "top",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 333,
        line_linked: {
          opacity: .5
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};

function Main() {
  const [view1, toggle1] = useState(0);
  const [view2, toggle2] = useState(0);
  const [view3, toggle3] = useState(0);
  const [view4, toggle4] = useState(0);

  // span style to make words blacked out
  const HiddenStyle = {
 }
 console.log("Hello! How you are doing today?\n\nRemember no matter where you go carry enough love with you to give away, just enough to put a smile on someones face.")
  // onClick for links
  // function linkToSup(){
  //     window.location.href ="https://supp2u.netlify.com/"
  // }

  // function linkToLS(){
  //     window.location.href ="https://supp2u.netlify.com/"
  // }

  // function linkToSlackr(){
  //     window.location.href ="https://slackrs-app.netlify.com/"
  // }

  return (
    <div className="App">
      {/*-------------Particle based Display-----------------*/}
      <div id="particle-container">
        <Particles className="particles" params={particleconfig} />

        <div className="header">
          <h1>
            Taylor<br /> Blount            
          </h1>
          <h3><span className="hidden-style" style={HiddenStyle}>
            {/* connecting */}
            </span><br/> 
            Software Developer<span className="hidden-style" style={HiddenStyle}>
              <br/>
              {/* people */}
              </span>    <span className="hidden-style" style={HiddenStyle}>
                {/* globally */}
                </span></h3>
          <div className="icon-container">
            <a
              title="Linkedin"
              className="fa"
              href="https://www.linkedin.com/in/taylor-blount-3b288a18a/"
              target="new"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              title="Contact Me"
              className="fa"
              href="mailto:blount3taylor@gmail.com"
              target="new"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              title="Github"
              className="fa2"
              href="https://github.com/thirdeyeclub"
              target="new"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <div className="pagelinks">
            <a className="pagenav" href="#aboutMe">
              About Me
            </a>
            <a className="pagenav" href="#projects">
              Projects
            </a>
            <a className="pagenav" href={resume} download>
              Resume <FontAwesomeIcon icon={faDownload} />
            </a>
          </div>
        </div>
        <a href="#aboutMe" className="down">
          <FontAwesomeIcon icon={faChevronCircleDown} />
        </a>
      </div>
      {/*------------Particle body Ends Here---------------------------*/}

      {/*-------------About Me------------*/}

      <div id="aboutMe" className="about ">
        <h1>About Me</h1>
        <p>
          I am an experienced Agile Developer and Tech Lead. I primarily work with
          Web Applications , using <b>Node Js</b> or <b>Ruby on Rails</b> or <b>Flask</b> [for Backend] and <b>postgreSQL</b>
           or <b>MongoDB</b> [for DBMS]. I am creative and detail oriented, well versed in Frontend libraries such as <b>React Js</b>. 
           My preferred languages are <b>JavaScript, Python, and Ruby</b>. Although I have experience with many more under my belt.
           I am passionate about creating a better more open world for all of us to enjoy and <b>collaborate</b> in.
        </p>
        <p>

        </p>
        <div className="tech">
          <div className="tools">
            <h2>Tools</h2>
            <div className="tools-icon">
              <FontAwesomeIcon icon={faGitAlt} />
              <FontAwesomeIcon icon={faSass} />
              <FontAwesomeIcon icon={faJs} />
            </div>
          </div>

          <div className="web-technologies">
            <h2>Technology</h2>
            <div className="web-icons">
              <FontAwesomeIcon icon={faReact} />
              <FontAwesomeIcon icon={faNode} />
              <img
                src={postgres}
                alt="postgreSql Icon"
                width="120px"
                height="120px"
              />
            </div>
          </div>

        </div>
      </div>

      {/*------------Work Timeline-------- */}

      {/* <div className="timeline">
        <h1>Timeline</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date=" Aug 2019 - Oct 2019"
            iconStyle={{ background: "#000000", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faReact} />}
          >
            <h1 onClick={linkToSup}>Supp 2 U</h1>
            <h3 onClick={linkToSup}>Web Developer who contributed to both sides of the stack.</h3>
            <h3 onClick={linkToSup}>Platform that provides a way for bushiness owners to advertise themselves and allows customers to rate and review those business.
                <br/><br/> Built with React Js and Ruby On Rails
            </h3>
            <a className="timeline-link" href="https://github.com/Lambda-Labs-Weedmaps-1">Checkout it's open source code on github</a>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date=" Apr 2019 -  July 2019"
            iconStyle={{ background: "#000000", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faHeart} />}
          >
            <h1 onClick={linkToLS}>Live Safe</h1>
            <h1 onClick={linkToLS}>Full Stack Web Developer</h1>
            <h3 onClick={linkToLS}>Application that brings together relevant information about disaster risks for potential homeowners.</h3>
            <p onClick={linkToLS}>Developed with Node.js and MapBox </p>
            <a className="timeline-link" href="https://github.com/labs12-should-i-live-here/Front-End">Checkout it's open source code on github</a>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date=" May 2019 - June 2019"
            iconStyle={{ background: "#000000", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faNodeJs} />}
          >
            <h1 onClick={linkToSlackr}>Slackr</h1>
            <h1 onClick={linkToSlackr}>Full Stack Developer</h1>
            <h3 onClick={linkToSlackr}>Management Application integrated with Slack</h3>
            <h3 onClick={linkToSlackr}>Developed with React Js and Node Js</h3>
            <a className="timeline-link" href="https://github.com/labs-13-slack-manager-survey">Checkout it's open source code on github</a>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date=" May 2019 - Present"
            iconStyle={{ background: "#000000", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h1>Lambda Team Lead</h1>
            <h1>Tech Lead</h1>
            <p>Leading Teams of new software engineers to victory!</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date=" August 2016 - Fall 2017"
            iconStyle={{ background: "#000000", color: "#fff" }}
            icon={<FontAwesomeIcon icon={ faHtml5 } />}
          >
            <h1>Next Inc.</h1>
            <h1>Copywriter / Digital Marketer</h1>
            <p>Creating Advertisements and Digital Marketing strategies</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date=" Summer 2016"
            iconStyle={{ background: "#000000", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faUniversity} />}
          >
            <h1>HCC</h1>
            <p>Liberal Arts</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2013"
            iconStyle={{ background: "#000000", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h1>Riverview Highschool</h1>
            <p>Graduated with Honors</p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div> */}
      {/*------------Projects---------------*/}
      <div id="projects" className="projects">
        {/* <h1>Projects</h1> */}
        <h2 style={{ maxWidth: "90%" , fontSize: "4vh"}}>
        Checkout some of my latest projects.
        </h2>
        <div className="project-content">
          <div
            className="project-item"
            onMouseEnter={() => {
              toggle1(1);
            }}
            onMouseLeave={() => {
              toggle1(0);
            }}
          >
            <h1>Supp2u</h1>
            <ReactCardFlip isFlipped={view1} flipDirection="horizontal">
              <img
                key="front"
                src={require("../../assets/sup1.png")}
                alt="Eat Good"
                className="front"
              />
              <div className="reverse" key="back">
                <h2>
                Connecting restaurants and food lovers together. This platform provides a way for bushiness owners to advertise themselves as well as allowing customers to rate and review those business.
                </h2>
                <h2>Developed with React Js, Ruby on Rails & postgreSQL</h2>
                <h2>
                  Server Deployed on Heroku, DBMS hosted with
                  Heroku postgeSQL and Front End Hosted with Netlify
                </h2>
              </div>
            </ReactCardFlip>

            <div className="options">
              <div onClick={() => toggle1(!view1)}>
                
                  More <FontAwesomeIcon icon={faInfoCircle} />
               
              </div>
              <div>
                <a href="https://supp2u.netlify.com/" target='new'>
                  Launch <FontAwesomeIcon icon={faPlayCircle} />
                </a>
              </div>
              <div>
                <a href="https://github.com/Lambda-Labs-Weedmaps-1" target='new'>
                  Source
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-item"
            onMouseEnter={() => {
              toggle2(1);
            }}
            onMouseLeave={() => {
              toggle2(0);
            }}
          >
            <h1>Live Safe</h1>
            <ReactCardFlip isFlipped={view2} flipDirection="horizontal">
              <img
                key="front"
                src={require("../../assets/livesafe.png")}
                alt="Stay Safe"
              />
              <div className="reverse" key="back">
                <h2>
                The LiveSafe project gives users a one-stop shop for quantifying the risks of natural disasters.
                </h2>
                <h2>Developed with React Js & Node Js</h2>
                <h2>Uses Mapbox and Data Analytics to create an interactive map of American Counties</h2>
                <h2>Deployed via Netlify</h2>
              </div>
            </ReactCardFlip>

            <div className="options">
              <div onClick={() => toggle2(!view2)}>
                
                  More <FontAwesomeIcon icon={faInfoCircle} />
                
              </div>
              <div>
                <a href="https://livesafe.netlify.com/" target='new'>
                  Launch <FontAwesomeIcon icon={faPlayCircle} />
                </a>
              </div>
              <div>
                <a href="https://github.com/labs12-should-i-live-here/Front-End" target='new'>
                  Source
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-item"
            onMouseEnter={() => {
              toggle3(1);
            }}
            onMouseLeave={() => {
              toggle3(0);
            }}
          >
            <h1>VR-Funding Platform</h1>
            <ReactCardFlip isFlipped={view3} flipDirection="horizontal">
              <img
                key="front"
                src={require("../../assets/vr1.png")}
                alt="Fund Me"
              />
              <div className="reverse" key="back">
                <h2>
                A platform for crowdfunding ideas and projects in the virtual reality space. Featuring an API serving five client's applications built as a solution for the  data storage and interaction for Lambda's Build Week
                </h2>
                <h2>Developed with React Js & Node Js</h2>
                <h2>Deployed on Netlify & a postgreSQL hosted on Heroku</h2>
              </div>
            </ReactCardFlip>

            <div className="options">
              <div onClick={() => toggle3(!view3)}>
                
                  More <FontAwesomeIcon icon={faInfoCircle} />
                
              </div>
              <div>
                <a href="https://sixrfund.netlify.com/">
                  Launch <FontAwesomeIcon icon={faPlayCircle} />
                </a>
              </div>
              <div>
                <a href="https://github.com/vr-funding-platform">
                  Source
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-item"
            onMouseEnter={() => {
              toggle4(1);
            }}
            onMouseLeave={() => {
              toggle4(0);
            }}
          >
            <h1>Slackr</h1>
            <ReactCardFlip isFlipped={view4} flipDirection="horizontal">
              <img
                key="front"
                src={require("../../assets/slackr.png")}
                alt="T & P"
              />
              <div className="reverse" key="back">
                <h2>
                An application that helps managers run their daily standup reports asynchronously. Our application will help the whole team and best of all, it is completely free to start!
                </h2>
                <h2>Developed with React Js and Integrated with Slack</h2>
                <h2>Deployed on Netlify</h2>
              </div>
            </ReactCardFlip>

            <div className="options">
              <div onClick={() => toggle4(!view4)}>
                
                  More <FontAwesomeIcon icon={faInfoCircle} />
                
              </div>
              <div>
                <a href="https://slackrs-app.netlify.com/" target='new'>
                  Launch <FontAwesomeIcon icon={faPlayCircle} />
                </a>
              </div>
              <div>
                <a href="https://github.com/labs-13-slack-manager-survey" target='new'>
                  Source
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>

        </div>
        <h2 style={{ marginTop: "50px" }}>
          You can find more of my contributions here:{" "}
          <a href="https://github.com/thirdeyeclub" target="new">
            @ My Github
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <br />
        </h2>
      </div>
      {/*------------Footer---------------*/}
      <div className="footer">
        <div>
          <h2>Connect With Me:</h2>
        </div>
        <div className="icon-container">
        <a
              title="Linkedin"
              className="fa"
              href="https://www.linkedin.com/in/taylor-blount-3b288a18a/"
              target="new"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              title="Contact Me"
              className="fa"
              href="mailto:blount3taylor@gmail.com"
              target="new"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              title="Github"
              className="fa2"
              href="https://github.com/thirdeyeclub"
              target="new"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
        </div>
        <div className="made">
          <h2>
            <FontAwesomeIcon icon={faCode} /> with{" "}
            <FontAwesomeIcon icon={faHeart} /> on{" "}
            <FontAwesomeIcon icon={faReact} />{" "}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Main;
