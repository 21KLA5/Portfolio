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
                    <a href="https://www.linkedin.com/in/kavin-arasu/" target="_blank"><button id="linkedin"> <LinkedInIcon /> </button></a>
                    <a href="https://github.com/21KLA5" target="_blank"><button id="github"> <GitHubIcon /> </button></a>
                    <a href="https://www.instagram.com/kavinarasu_/" target="_blank"><button id="instagram"> <InstagramIcon /> </button></a>
                </div>
            </div>
            
        </>
    );
}

export default ProfilePic;