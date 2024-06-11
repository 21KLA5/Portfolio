import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import './OnePage.css'

export default function OnePage(){
    return(
        <BrowserRouter>
            <div className="container">
                <div className="navBar">
                    <ol>
                        <li>
                            <button>
                                <Link to='#firstSec'>First</Link>
                            </button>
                        </li>

                        <li>
                            <button>
                                <Link to='#secondSec'>Second</Link>
                            </button>
                        </li>

                        <li>
                            <button>
                                <Link to='#thirdSec'>Third</Link>
                            </button>
                        </li>
                    </ol>
                </div>


                <section id="firstSec">
                    <h1>First section</h1>
                    <p>
                        
                    </p>
                </section>
                <section id="secondSec">
                    <h1>Second section</h1>
                    <p>
                        
                    </p>
                </section>
                <section id="thirdSec">
                    <h1>Third section</h1>
                    <p>
                        
                    </p>
                </section>
            </div>
            
            
        </BrowserRouter>
    )
}
