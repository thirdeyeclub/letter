import React, {useState} from 'react'

import axios from 'axios'

import './contact.sass'

export default function Contact() {

    const [Email, setEmail] = useState({
        date: new Date(),
        sender: null,
        title: null,
        body: null,
        origin: 'portfolio'})

    const changeHandler = event => {
        setEmail({ ...Email, [event.target.name]: event.target.value });
    };
    const sendMail = event =>{
        event.preventDefault()
        console.log('CLICKED', Email) 

        axios.post(`https://countervail-33.herokuapp.com/eDrop`, Email)
        .then(res => console.log(res.data))
        .catch(error => console.log('THERE HAS BEEN AN ERROR',error))
        // this function will send an object to my backend 
        // then send that to my email blount3taylor@gmail.com

    }  

    return (
        <div className="contact-page">

            <h3>Work With Me</h3>

            <div className="p-box">
                <p>If you are interested in working with me, contacting me regarding a job offer, or just want to say hello you can send me a message below</p>
            </div>

            <form className="form" onSubmit={sendMail}>
                <label className="lab">Send me an email</label><br/>
                <input 
                    className="input" 
                    type="text" 
                    placeholder="Your email"
                    name="sender"
                    onChange={changeHandler}/><br/>

                <input 
                    className="input" 
                    type="textbox" 
                    placeholder="Subject..."
                    name="title"
                    onChange={changeHandler}/><br/>

                <textarea 
                    className="input" 
                    type="textbox" 
                    placeholder="Email body..."
                    name="body"
                    onChange={changeHandler}/><br/>

                <button className="Abutton">SEND</button>
            </form>
        </div>
    )
}
