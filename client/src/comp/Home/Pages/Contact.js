import React, {useState} from 'react'

import axios from 'axios'

import './contact.sass'

export default function Contact() {

    const [Email, setEmail] = useState({
        date: new Date(),
        sender: null,
        title: null,
        body: null})

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
            <h3>Talk to Me</h3>
            <p>Send me an email</p>
            <form className="form" onSubmit={sendMail}>
                <label>Your contact information</label><br/>
                <input 
                    className="input" 
                    type="text" 
                    placeholder="Your email"
                    name="sender"
                    onChange={changeHandler}/><br/>

                <label>What is this regarding</label><br/>
                <input 
                    className="input" 
                    type="textbox" 
                    placeholder="Subject..."
                    name="title"
                    onChange={changeHandler}/><br/>

                <label>What do you have to say:</label><br/>
                <textarea 
                    className="input" 
                    type="textbox" 
                    placeholder="Email body..."
                    name="body"
                    onChange={changeHandler}/><br/>

                <button>send</button>
            </form>
        </div>
    )
}
