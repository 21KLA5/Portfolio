import React from 'react';
import './Projects.css';

const projectsData = [
    {
        title: 'onQ Grade calculator',
        description: 'Tired of using a grade calculator to find your current grade in a Queens onQ course?This extension calculate your current grade as well as your final grade in progress.',
        link: 'https://project1.com'
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
    }
    // Add more projects as needed
];

function Projects() {
    return (
        <section className="projects-section">
            <h2>Projects</h2>
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
        </section>
    );
}

export default Projects;
