import React from 'react'

import './intro.sass'

import myImg from '../../../assets/me.jpg'
import Project from '../../../assets/project2.png'

import data from '../../../data/projDat.js'

export default function Intro() {

    // link to contact
    const sendRaven = () => {window.location.href="/work-with-me"}
    // link to a random project
    const sendPro = () =>{
        function aNumber(){
            return Math.floor(Math.random() * data.length)}
        function randomLink(){ 
            window.location.href = `${data[aNumber()].weblink}`}
        // now call the whole function
        randomLink()
    }

    return (
        <div className="page">
            <div className="hello">
                <img
                className="me"
                src={myImg}
                alt="useful developer"    />

                <div className="intro">
                    <p>geeegegegegegwgeewgegeewggeegwe</p>
                    <p>geeegegegegegwgeewgegeewggeegwe</p>
                    <p>geeegegegegegwgeewgegeewggeegwe</p>
                    <p>geeegegegegegwgeewgegeewggeegwe</p>
                </div>
            </div>

            <div className="promo">
                <div className="promo-block">
                    a little more about me
                </div>
                <div className="promo-block">
                    <p>Discover my work.</p>
                    <img src={Project} 
                         alt="gee" 
                         className="promo-img"
                         onClick={sendPro} />
                </div>
                <div className="block-3">

                </div>
            </div>
        </div>
    )
}
