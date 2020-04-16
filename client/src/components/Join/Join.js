import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

const MySocket = require('../../socket');

const Join = () => {
    var [name, setName] = useState('');
    var [room, setRoom] = useState('main');
    
    return (
        <div className="joinOuter">
            <div className="joinInner">
                <div><input placeholder="Username" className="joinInput mt-20" type="text" onChange={(event) => setName(event.target.value)}></input></div>
                <div><input placeholder="Room name (Main by default)" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)}></input></div>
                <Link
                    className="button mt-20"
                    role="button"
                    onClick={()=>{
                        MySocket.emit("join" , {joinName:name, joinRoom: room})
                    }}
                    to="/Chat"
                    >
                    Sign in
                    </Link>
            </div>
        </div>
    )
}
export default Join;