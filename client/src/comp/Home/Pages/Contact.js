import React, {useState} from 'react'

import './contact.sass'

export default function Contact() {

    const [Email, setEmail] = useState({})

    const changeHandler = event => {
        setEmail({ ...Email, [event.target.name]: event.target.value });
    };
    const sendMail = event =>{
        event.preventDefault()
        console.log('CLICKED', Email)  
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
                    name="email"
                    onChange={changeHandler}/><br/>

                <label>What is this regarding</label><br/>
                <input className="input" 
                type="textbox" 
                placeholder="Email title..."
                name="title"
                onChange={changeHandler}/><br/>

                <label>What do you have to say:</label><br/>
                <textarea className="input" 
                type="textbox" 
                placeholder="Email body..."
                name="body"
                onChange={changeHandler}/><br/>

                <button>send</button>
            </form>
        </div>
    )
}
