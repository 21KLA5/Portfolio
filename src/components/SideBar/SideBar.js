import React from "react"
import '../../App.css'
import { SideBarData } from "./SideBarData";
import ProfilePic from "./ProfilePic";
function SideBar() {
  const scrollTo = (link) => {
    // Implement scroll logic here
    console.log("Scroll to:", link);
  };

  return (
    <div className="sidebar">
      <ProfilePic />
      <ul className="SidebarList">
        {SideBarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              onClick={() => scrollTo(val.link)} // Fixed onClick event
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBar;