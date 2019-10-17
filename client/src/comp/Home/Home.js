import React, {useState} from 'react'
import './home.sass'

import Intro from './Pages/Intro';
import Project from './Pages/Projects';
import Contact from './Pages/Contact';

// this will handle the second thing the user sees the home page
// i want to send them in different paths to get to "know me"
// this will be a representation of your social mask
// lets start easy and build up on top of a whitespace minimalist frame

export default function Home() {

    const [Bool, setBool] = useState({
        gate_one: false , //  bio pop up
        gate_two: false , // projects pop up
        gate_three: false // contact pop up
                                    })

    //  center we have a short about me that will expand if clicked
    //         left the user can go to my projects
    //         right they can go to my contact forms
    //         there should be more than this but this is only the prototype 

    const openBio = e =>{
        if(Bool.gate_one === false){
            setBool({gate_one: true, gate_two: false, gate_three:false})}
        else{
            setBool({gate_one : false, gate_two: false, gate_three:false})
        }}

    const openProjects = e =>{
        if(Bool.gate_two === false){
            setBool({gate_two: true, gate_one: false, gate_three: false})}
        else{
            setBool({gate_two : false, gate_one: false, gate_three: false})
        }}

    const openContact = e =>{
        if(Bool.gate_three === false){
            setBool({gate_three: true, gate_one: false, gate_two: false})}
        else{
            setBool({gate_three : false, gate_one: false, gate_two: false})
        }}

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

            <div className="main">
            {Bool.gate_one ? <Intro className="slide"/> : null}
            {Bool.gate_two ? <Project className="slide"/> : null}
            {Bool.gate_three ? <Contact className="slide"/> : null}
            </div>
        </div>
    )
}
