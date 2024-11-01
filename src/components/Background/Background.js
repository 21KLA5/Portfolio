import React from "react";
import "./Background.css";
import Header from "./Header/Header";
import Projects from "./Projects";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Background() {
    return (
        <div>
            <div className="background-container">
                <div className="left-content">  
                        <Router>
                            <Header />
                                <Routes>
                                    <Route path="/projects" element={<Projects />} />   
                        
                                </Routes>
                            
                        </Router>           
                        
             
                </div>
                <div className="right-background" />
            </div>
        </div>
    );
}

export default Background;
