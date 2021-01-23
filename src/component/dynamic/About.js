import React from "react";
import Sidebar from "../static/Sidebar";
import Footer from "../static/Footer";
import Header from "../static/Header";
import { useState, useEffect } from "react";
import { FaReact } from "react-icons/fa";

const About = () => {
   const [isAbout, setIsAbout] = useState(true);
   useEffect(() => {
      if (isAbout) {
         const footerSelector = document.querySelector("footer");
         footerSelector.style.cssText = "position: fixed; bottom: 0px; left: 0px;";
      }
   });
   return (
      <React.Fragment>
         <Header />
         <div className="wrapper">
            <Sidebar />
            <div className="about-container">
               {/* Application Description */}
               <div className="app-info">
                  <h2 className="title">About Butter.DB</h2>
                  <p className="description">
                     {" "}
                     Butter.DB allows users to view relevant information regarding upcoming, top
                     rated, popular or newly released movies. In addition, this app is capable of
                     letting users bookmark movies via like or add movies to a watchlist.
                  </p>
               </div>

               {/* Movie DB Api Description */}
               <div className="tmdb-info">
                  <img
                     src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"
                     alt="TMDB Logo"
                     width="150"
                  />
                  <p className="description">
                     This product uses the TMDb API but is not endorsed or certified by TMDb.
                  </p>
               </div>
               {/* Powered By React */}
               <div className="react-info">
                  <h2 className="title">
                     {" "}
                     Powered By{" "}
                     <FaReact
                        color="#61DAFB"
                        size="0.7em"
                        style={{ marginRight: "4px", marginLeft: "7px" }}
                     />
                     React.JS
                  </h2>
                  <p className="description">
                     Butter.DB is a small project that combines HTML5, SCSS, Javascript, React.JS to
                     create a simple full stack application.
                  </p>
               </div>
            </div>
         </div>
         <Footer />
      </React.Fragment>
   );
};

export default About;
