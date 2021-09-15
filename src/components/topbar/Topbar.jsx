import React from 'react'
import "./topbar.css"
import mercurylogo from "../images/mercurylogo.png"
import {NotificationsNone, Language, Settings} from '@material-ui/icons/';
import { Link } from 'react-router-dom';

export const Topbar = () => {

    let today = new Date();

let date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();

let time = today.getHours() + ":" + today.getMinutes()

let dateTime = date+' | '+time;
    return (
        <div className="topbar">
            <div className="topbarwrapper">
                <div className="topLeft">
                    <span className="logo"><Link to="/"><img className="mercuryImg" src={mercurylogo}/></Link></span>
                </div>
                <div className="topRight">
                    <span className="topbarIconContainer">{dateTime}</span>
                    <img src="https://static.wixstatic.com/media/5b4abc_c79574d4d9c84d02b74dd4ae6f7f8d25~mv2.jpg/v1/fill/w_560,h_682,al_c,q_90/5b4abc_c79574d4d9c84d02b74dd4ae6f7f8d25~mv2.webp" alt="" className="topAvatar" />
                </div>
                </div>
            </div>
      
    )
}