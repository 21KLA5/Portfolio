import React from "react";
import "./Header.css";
import Typewriter from 'typewriter-effect';
import coder from "../../../assets/download.jpg";
import resume from '../../../assets/Resume.pdf';
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Header() {
    return (
        <>
            <div className="description">

                <h1>Kavin Arasu</h1>
                <div className="container">
                    <p>I'm a&nbsp;</p>
                    <Typewriter 
                        className="type" 
                        options={{
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 20,
                            strings: ["Cybersecurity", "Software"]
                        }} 
                    />
                    engineer
                
                
                </div>
                <img className="coder" src={coder} alt="coding man" />

                <div className="buttons">
                    <a href={resume} target="_blank" rel="noopener noreferrer">
                        <button className="btn">Resume</button>
                    </a>
                    <Link to="/projects" className="btn">Projects</Link>
                </div>

                <div className="social-media-buttons">
                    <a href="https://github.com/21KLA5" target="_blank" rel="noopener noreferrer" className="social-btn">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/kavin-arasu/" target="_blank" rel="noopener noreferrer" className="social-btn">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://www.instagram.com/kavinarasu_/" target="_blank" rel="noopener noreferrer" className="social-btn">
                        <FaInstagram size={24} />
                    </a>
                </div>

            </div>
                    
            
            

        </>
    );
}

export default Header;
