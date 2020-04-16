import React from 'react';
import './Input.css';
import { useState } from 'react';
const MySocket = require('../../../socket');



const Input = (props) => {
    const [input, setInput] = useState("");
    const sendMessage = (e) => {
        e.preventDefault();
        var text = input;
        MySocket.emit("message" , {user:props.user, message:text});
        setInput('');
    };

    return (
        <form className="form">
            <input id="message"
                className="vertical-align"
                type="text"
                placeholder="Enter message"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyPress={event => event.key === 'Enter' ?  sendMessage(event) : null}></input>
            <button className="vertical-align" onClick={event => sendMessage(event)}>Send</button>
        </form>
    )
};
export default Input;