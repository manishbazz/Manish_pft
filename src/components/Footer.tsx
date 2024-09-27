import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        {/* <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a> */}
        <a href="https://www.linkedin.com/in/manish-kumar-sharma-04941a253/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>I think, therefore I am <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer"></a>💜</p>
    </footer>
  );
}

export default Footer;