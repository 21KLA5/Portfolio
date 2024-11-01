import React from 'react';
import './Projects.css';
import { Link } from "react-router-dom";

const projectsData = [
    {
        title: 'onQ Grade calculator',
        description: 'Tired of using a grade calculator to find your current grade in a Queens onQ course? This google extension calculate your current grade as well as your final grade in progress. Check it out on my github or on the chrome webstore!',
        link: 'https://github.com/21KLA5/onQ-Grade-Extension'
    },
    {
        title: 'Project 2',
        description: 'A brief description of Project 2.',
        link: 'https://project2.com'
    },
    {
        title: 'Project 3',
        description: 'A brief description of Project 3.',
        link: 'https://project3.com'
    },
    {
        title: 'Project 4',
        description: 'A brief description of Project 3.',
        link: 'https://project3.com'
    },
    {
        title: 'Project 5',
        description: 'A brief description of Project 3.',
        link: 'https://project3.com'
    },
    {
        title: 'Project 6',
        description: 'A brief description of Project 3.',
        link: 'https://project3.com'
    }
    // Add more projects as needed
];

function Projects() {
    return (
        <section className="projects-section">
            <h2>My Projects</h2>
            <div className="projects-container">
                {projectsData.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
            <div className="back-home">
                <Link to="/">
                    <button className="btn">Return to Homepage</button>
                </Link>
            </div>
        </section>
    );
}

export default Projects;
