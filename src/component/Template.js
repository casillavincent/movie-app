import React from "react";
import Sidebar from "../../static/Sidebar";
import Header from "../../static/Header";
import Footer from "../../static/Footer";
import { FaFireAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import SinglePopular from "./SingleTemplate";
import { api_key } from "../../../globals/variables";
import { useState, useEffect } from "react";

const Popular = () => {
   return (
      <React.Fragment>
         <Header />
         <div className="wrapper">
            <Sidebar />
            <div className="render">
               {/* Filter Title */}
               <div className="filter-title">
                  <FaFireAlt size="1.5em" />
                  <h1> Popular </h1>
               </div>

               {/* Featured */}
               <figure className="featured">
                  <figcaption>
                     <h2> Call Me By Your Name </h2>
                     <ul>
                        <li>Romance</li>
                        <li>Foreign</li>
                        <li>Indie</li>
                     </ul>
                     <button>
                        <Link>More Info</Link>
                     </button>
                  </figcaption>
               </figure>

               {/*  Titles */}
               <div className="titles">
                  <h2>Popular Titles</h2>
                  <hr />
                  <main className="render-titles">
                     <SinglePopular />
                     <SinglePopular />
                     <SinglePopular />
                     <SinglePopular />
                     <SinglePopular />
                     <SinglePopular />
                  </main>
               </div>
            </div>
         </div>
         <Footer />
      </React.Fragment>
   );
};

export default Popular;
