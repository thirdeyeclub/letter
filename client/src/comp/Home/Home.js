import React, {useState} from 'react'
import './home.sass'
import Picture from '../../assets/me.jpg'

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
            {Bool.gate_one === false ? <img src={Picture} alt="admin" className="picMain" onClick={openBio}/> : null  }
            {Bool.gate_one === true ? 
                <div className="about">
                    <img src={Picture} alt="admin" onClick={openBio}/>
                    <div className="info">
                        <h1>Welcome</h1>
                        <h3>My name is Taylor Blount</h3>
                    </div>
                </div>
                : null}
            <div className="link">
                <h2 onClick={openProjects}> ◀️ Projects </h2>
                <h2 onClick={openContact}> ▶️ Make Contact</h2>
            </div>
           
        </div>
    )
}
