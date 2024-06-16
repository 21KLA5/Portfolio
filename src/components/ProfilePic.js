import React from "react";
import "./ProfilePic.css"
import pfp from "../assets/pfp.png"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';


function ProfilePic(){
    return(
        <>
            <div className="profile">
                <img className="pfp" src= {pfp} alt="Profile Pic" width={90} height={130} ></img>
                <h1 className="heading">
                    Kavin Arasu
                </h1>
                <div className="socials">
                    <button id="linkedin"> <LinkedInIcon /> </button>
                    <button id="github"> <GitHubIcon /> </button>
                    <button id="instagram"> <InstagramIcon /> </button>
                </div>
            </div>
            
        </>
    );
}

export default ProfilePic;