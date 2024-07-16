import React from "react";
import "./Header.css"
import Typewriter from 'typewriter-effect';
import coder from "../assets/download.jpg"

function Header(){
    return(
        <>
            <div className="description">
                <span>
                    <h1>Kavin Arasu</h1>
                    <img className="coder" src= {coder} alt="coding man"></img>
                    <div className="container">
                        <p>I'm a&nbsp;</p><Typewriter className="type" options={{autoStart: true,loop: true,deleteSpeed: 20,strings: [" Front End", " Back End", " Full Stack"]}}/>developer
                </div>
                </span>
            </div>
        </>
    );
}

export default Header; 