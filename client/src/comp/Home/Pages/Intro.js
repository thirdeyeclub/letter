import React from 'react'

import './intro.sass'

import myImg from '../../../assets/me.jpg'
import Contact from '../../../assets/contact2.gif'
import Project from '../../../assets/project2.gif'

import data from '../../../data/projDat.js'

export default function Intro() {

    const sendRaven = () => {window.location.href="/work-with-me"}
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

            <div className="promo">
                <div className="promo-block">
                    <p>Discover.</p>
                    <img src={Project} 
                         alt="gee" 
                         className="promo-img"
                         onClick={sendPro} />
                </div>
                <div className="promo-block">
                    a littlw more about me
                </div>
                <div className="block-3"
                     onClick={sendRaven}>
                    <i className="italic3">Send me a message.</i>
                    <img src={Contact} alt="gee" className="promo-img-2" />
                </div>
            </div>
        </div>
    )
}
