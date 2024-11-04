import React from 'react';
import './Projects.css';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1 ,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

const projectsData = [
    {
        title: 'onQ Grade calculator',
        description: 'Tired of using a grade calculator to find your current grade in a Queens onQ course? This google extension calculate your current grade as well as your final grade in progress. Check it out on my github or on the chrome webstore!',
        link: 'https://github.com/21KLA5/onQ-Grade-Extension',
        link2: 'https://chromewebstore.google.com/detail/onq-grade-extension/gkpllijimieaelbaipiildcfdcgjchko?hl=en'
    },
    {
        title: 'Portfolio Website',
        description: 'My portfolio to keep track of projects',
        link: ''
    },
    {
        title: 'Project 3',
        description: 'A brief description of Project 3.',
        link: ''
    },
    // Add more projects as needed
];

function Projects() {
    return (
        <>
            <div className="project-slider">
                <h1>
                    My Projects
                </h1>
                <Slider {...settings}>
                    {projectsData.map((projectsData, index) => (
                        <div key={index} className="project-slide">
                        <h3>{projectsData.title}</h3>
                        <p>{projectsData.description}</p>
                        <a href={projectsData.link} target="_blank" rel="noopener noreferrer">
                            View on Github
                        </a>
                        <a href={projectsData.link2} target="_blank" rel="noopener noreferrer">
                            Download
                        </a>
                        </div>
                    ))}
                </Slider>

                <div className="back-home">
                    <Link to="/">
                        <button className="btn">Return to Homepage</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Projects;
