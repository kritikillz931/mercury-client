import React from 'react'
import "./topbar.css"
import mercurylogo from "../images/mercurylogo.png"
import {NotificationsNone, Language, Settings} from '@material-ui/icons/';

export const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarwrapper">
                <div className="topLeft">
                    <span className="logo"><img className="mercuryImg" src={mercurylogo}/></span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                    </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                    <Language/>
                    <span className="topIconBadge">2</span>
                    </div>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                    <Settings/>
                    </div>
                    <img src="https://static.wixstatic.com/media/5b4abc_c79574d4d9c84d02b74dd4ae6f7f8d25~mv2.jpg/v1/fill/w_560,h_682,al_c,q_90/5b4abc_c79574d4d9c84d02b74dd4ae6f7f8d25~mv2.webp" alt="" className="topAvatar" />
                </div>
                </div>
            </div>
        </div>
    )
}