import React, {useState} from 'react'
import './home.sass'

import Intro from './Pages/Intro';
import Project from './Pages/Projects';
import Contact from './Pages/Contact';

import Pages from '../Router'

// this will handle the second thing the user sees the home page
// i want to send them in different paths to get to "know me"
// this will be a representation of your social mask
// lets start easy and build up on top of a whitespace minimalist frame

export default function Home() {

    const [Bool, setBool] = useState({
        gate_one: true , //  bio pop up
        gate_two: false , // projects pop up
        gate_three: false // contact pop up
                                    })

    //  center we have a short about me that will expand if clicked
    //         left the user can go to my projects
    //         right they can go to my contact forms
    //         there should be more than this but this is only the prototype 

    const openBio = e =>{
        window.location.href = '/'
    }

    const openProjects = e =>{
        window.location.href = '/check-this-out'
       }

    const openContact = e =>{
        window.location.href = '/work-with-me'
        }

    return (
        <div className="home">
            <div className="nav-bar">
                <div>
                    {/* side bar */}
                <div className="picture-box">picture box</div>
                <h5 className="link" onClick={openBio}>Home</h5>
                <h5 className="link" onClick={openProjects}>Projects</h5>
                <h5 className="link" onClick={openContact}>Make Contact</h5>
                </div>
            </div>

            <div className="main" id="main">
            <Pages />
            </div>
        </div>
    )
}
