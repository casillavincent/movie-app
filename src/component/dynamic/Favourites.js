import React from "react";
//Components
import Header from "../static/Header";
import Footer from "../static/Footer";
import Sidebar from "../static/Sidebar";

const Favourites = () => {
   return (
      <React.Fragment>
         <Header />
         <div className="wrapper">
            <Sidebar />
            <div className="favourites-container">
               <h1> Favourites</h1>
            </div>
         </div>
         <Footer />
      </React.Fragment>
   );
};

export default Favourites;
