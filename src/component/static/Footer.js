import React from "react";
import { FaReact, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <footer>
         <div className="column column01">
            <p className="footer-large-text">Powered By:</p>
            <div className="react-logo">
               <FaReact size="1em" color="#61dafb" />
               <p className="footer-normal-text"> React </p>
            </div>
         </div>

         <div className="column column02">
            <p className="footer-large-text"> &copy; Vincent Casilla 2020 </p>
            <p className="footer-normal-text"> For Education Purposes Only </p>
            <p className="footer-normal-text">
               {" "}
               <Link to={"/credits"} style={{ color: "#7893E4", textDecoration: "none" }}>
                  Credits
               </Link>{" "}
            </p>
         </div>

         <div className="column column03">
            <p className="footer-large-text"> Connect With Me</p>
            <div className="social-menu">
               <div className="social-menu-github">
                  <a href="https://github.com/casillavincent" target="_blank">
                     <FaGithub size="1.5em" color="white" />
                  </a>
               </div>
               <div className="social-menu-email">
                  <a href="mailto:vcasilla1@my.bcit.ca?subject=Hello Vincent!">
                     <MdEmail size="1.5em" color="white" />
                  </a>
               </div>
               <div className="social-menu-linkedin">
                  {" "}
                  <AiFillLinkedin size="1.5em" color="white" />
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
