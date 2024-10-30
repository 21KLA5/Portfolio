import React from "react";
import "./Header.css";
import Typewriter from 'typewriter-effect';
import coder from "../../../assets/download.jpg";
import resume from '../../../assets/Resume.pdf';

function Header() {
    return (
        <>
            <div className="description">
                <div className="head">
                    <h1>Kavin Arasu</h1>
                    <div className="container">
                        <p>I'm a&nbsp;</p>
                        <Typewriter 
                            className="type" 
                            options={{
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 20,
                                strings: ["Cybersecurity", "Front End", "Back End", "Full Stack"]
                            }} 
                        />
                        engineer
                    
                    
                    </div>
                    <img className="coder" src={coder} alt="coding man" />
                </div>
                


                    
                <div className="buttons">
                    <a href={resume} target="_blank" rel="noopener noreferrer">
                        <button className="btn">Resume</button>
                    </a>
                    <a href="#projects" className="btn">Projects</a>
                </div>
                
            </div>

        </>
    );
}

export default Header;
