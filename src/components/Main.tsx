import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profile from '../assets/images/profile.jpeg'

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        {/* <div className="image-wrapper">
          <img className="profile_pic" src={profile} alt="Avatar" />
        </div> */}
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/manishbazz" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/manish-kumar-sharma-04941a253/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Manish Kumar Sharma</h1>
          <p>Mechanical Design Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/manishbazz" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/manish-kumar-sharma-04941a253/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;