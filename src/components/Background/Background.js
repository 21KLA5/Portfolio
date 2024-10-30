import React from "react";
import "./Background.css";
import Header from "./Header/Header";

function Background() {
    return (
        <div className="background-container">
            <div className="left-content">
                <Header />
            </div>
            <div className="right-background" />
        </div>
    );
}

export default Background;
