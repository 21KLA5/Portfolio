import React from "react"
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import InfoIcon from '@mui/icons-material/Info';
import EmailIcon from '@mui/icons-material/Email';

export const SideBarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: {
            top: 100,
            left: 100,
            behavior: "smooth",
          }
    },
    {
        title: "About Me",
        icon: <InfoIcon />,
        link: (0, 1900)
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
