import React from "react";
import Header from "../static/Header";
import Footer from "../static/Footer";

const Credits = () => {
   window.scrollTo(0, 0);
   return (
      <React.Fragment>
         <Header />
         <div className="wrapper">
            <div className="credits-container">
               <h1>Credits</h1>
               {/* Logo */}
               <div>
                  <h2>Butter.DB Logo</h2>
                  <a href="https://www.freepik.com" title="Freepik" target="_blank">
                     Freepik
                  </a>{" "}
                  from{" "}
                  <a href="https://www.flaticon.com/" title="Flaticon" target="_blank">
                     www.flaticon.com
                  </a>
               </div>

               {/* Animations */}
               <div>
                  <h2>Animasta</h2>
                  <a href="https://animista.net/" target="_blank">
                     View Animasta
                  </a>
               </div>
            </div>
         </div>
         <Footer />
      </React.Fragment>
   );
};

export default Credits;
