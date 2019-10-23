import React from 'react'
import './home.sass'

import Pages from '../Router'

// icons
import homeIcon from '../../assets/home.svg'
import projIcon from '../../assets/projects.svg'
import contIcon from '../../assets/contact.svg'
// this will handle the second thing the user sees the home page
// i want to send them in different paths to get to "know me"
// this will be a representation of your social mask
// lets start easy and build up on top of a whitespace minimalist frame

export default function Home() {

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
            
                    {/* side bar */}
            <div className="nav-bar" id="nav">
                <div>
                    {/* picture and header  */}
                <div className="picture-box" id="picture-box">
                    <b >Taylor Blount</b>
                    <br/>
                    <i>Web Developer tagline</i>
                    <br/>
                    <p id="initials">T B</p>     
                </div>

                    {/* nav links  */}
                <div className="link" onClick={openBio}>
                    <img src={homeIcon}/> <h5>Home</h5> </div>
                <div className="link" onClick={openProjects}>
                    <img src={projIcon}/> <h5>Projects</h5></div>
                <div className="link" onClick={openContact}>
                    <img src={contIcon}/> <h5>Contact</h5></div>

                </div>
            </div>

                {/* all pages  */}
            <div className="main" id="main">
            <Pages />
            </div>
        </div>
    )
}
