import React from "react"
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import InfoIcon from '@mui/icons-material/Info';
import EmailIcon from '@mui/icons-material/Email';

export const SideBarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/home"
    },
    {
        title: "About Me",
        icon: <InfoIcon />,
        link: "/aboutMe"
    },
    {
        title: "Projects",
        icon: <DescriptionIcon />,
        link: "/projects"
    },
    {
        title: "Contact",
        icon: <EmailIcon />,
        link: "/contact"
    },
]
