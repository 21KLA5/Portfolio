import React from "react";
import "./Header.css"
import Typewriter from 'typewriter-effect';
import coder from "../../../assets/download.jpg"
import resume from '../../../assets/Resume.pdf'

<embed src={resume} width="100%" height="600px" type="application/pdf" />

function Header(){
    return(
        <>
            <div className="description">
                <span>
                    <h1>Kavin Arasu</h1>
                    <div className="container">
                        <p>I'm a&nbsp;</p><Typewriter className="type" options={{autoStart: true,loop: true,deleteSpeed: 20,strings: [" Front End", " Back End", " Full Stack"]}}/>developer
                    </div>
                </span>
                <img className="coder" src= {coder} alt="coding man"></img>
                <div class="resume-container">
                    <embed src={resume} width="400px" height="100px" type="application/pdf"></embed>
                </div>
            </div>
        </>
    );
}

export default Header; 