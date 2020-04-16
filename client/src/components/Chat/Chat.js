import '../style.css';
import React, { useState, useEffect } from 'react';
import './Chat.css';
import Nav from '../Nav/Nav';
import Input from './Input/Input'
import ChatLog from './ChatLog'
import InfoBar from './InfoBar/InfoBar';
import { colors } from '@material-ui/core';
//===========================
const MySocket = require('../../socket');

const Chat = () => {
    var userName = "";
    const [currentRoom, setRoom] = useState("");
    const [message, setMessage] = useState('');
    const [messagelog, setMessagelog] = useState([]);
    const [users, setUsers] = useState([]);

    MySocket.on('join', ((load) => {
        console.log(`JOIN IN CHAT ${load.joinName} as name and ${load.joinRoom} as room`);
        userName = load.joinName;
        var tempUsers = [];
        load.users.map(usr => {
            tempUsers.push(usr);
        });
        setUsers([...users, ...tempUsers]);
        setRoom(load.joinRoom);
    }));

    useEffect(() => {
        console.log("Weclome to the chat page, " + userName + " room: " + currentRoom);
    }, [userName]);

    useEffect(() => {
        MySocket.on('message', (message) => {
            setMessagelog([...messagelog, message]);
        });
    });


    return (
        <React.Fragment>
            <div className="outerContainer">
                <div className="header">
                    <Nav />
                </div>
                <div className="container">
                    <InfoBar className="info" room={currentRoom} />
                    <ChatLog className="messages" messageLog={messagelog} />
                    <Input className="input" user={userName} />
                </div>
                <div className="rightPanel">
                    <div className="list">
                        <h2 style={{color:'#2979ff'}}>Connected users:</h2>
                        {
                            users.map((usr) => (
                                console.log(`this user name is ${usr.name} and his id is ${usr.id}`),
                                <div className="liItem" key={usr.id}> {usr.name}</div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Chat;