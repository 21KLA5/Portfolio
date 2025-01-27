import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';
import onq from '../../assets/onq.jpg';
import codingMan from '../../assets/download.jpg';
import plateful from '../../assets/plateful.jpg';
import flight from '../../assets/flight.jpg';

const projectsData = [
    {
        title: 'onQ Grade calculator',
        description: 'Tired of using a grade calculator to find your current grade in a Queens onQ course? This google extension calculates your current grade as well as your final grade in progress. Check it out on my github or on the chrome webstore!',
        link: 'https://github.com/21KLA5/onQ-Grade-Extension',
        link2: 'https://chromewebstore.google.com/detail/onq-grade-extension/gkpllijimieaelbaipiildcfdcgjchko?hl=en',
        Image: onq
    },
    {
        title: 'Portfolio Website',
        description: 'My personal portfolio website to keep track of projects',
        link: 'https://github.com/21KLA5/portfolio',
        Image: codingMan
    },
    {
        title: 'Plateful',
        description: 'Plateful leverages AI to optimize routes for drivers, efficiently connecting grocery stores with food banks to reduce waste and fight food insecurity by delivering extra food where it’s needed most.',
        link: 'https://github.com/21KLA5/Plateful',
        link2: 'https://www.plateful-ai.design/',
        Image: plateful
    },
    {
        title: 'Flight Booking Simulator',
        description: 'A flight booking simulator that allows users to book flights, view their bookings, and cancel their bookings. The simulator is built using Flask and MongoDB as part of CISC 327.',
        link: 'https://github.com/21KLA5/Flight-Booking-Sim',
        Image: flight
    }
];

function Projects() {
    const navigate = useNavigate();

    return (
        <div className="projects-container">
            <h1 className="projects-heading">My Projects</h1>
            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.Image} alt={project.title} className="project-image" />
                        <h2 className="project-title">{project.title}</h2>
                        <p className="project-description">{project.description}</p>
                        <div className="project-links">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
                            {project.link2 && (
                                <a href={project.link2} target="_blank" rel="noopener noreferrer" className="project-link">Chrome Webstore</a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <button className="back-button" onClick={() => navigate('/portfolio')}>
                Back to Portfolio
            </button>
        </div>
    );
}

export default Projects;
