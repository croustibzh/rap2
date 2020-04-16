import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import './InfoBar.css';
import { Link } from 'react-router-dom';

const InfoBar = ({ room }) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <h2>{room}</h2>
        </div>
        <div className="rightInnerContainer">
            <Link to={`/`}>
                <CloseIcon fontSize="large" style={{ color: "aliceblue" }} />
            </Link>
        </div>
    </div>
)

export default InfoBar;