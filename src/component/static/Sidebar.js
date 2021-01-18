import React from "react";
import { FaFireAlt, FaStar, FaClock, FaPlay, FaFilter, FaRegPlusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { api_key, poster_base } from "../../globals/variables";
import { useState, useEffect } from "react";

const Sidebar = () => {
   //? <----- fetch data ----->
   const [latest, setLatest] = useState(null);
   const latest_url = `https://api.themoviedb.org/3/movie/latest?api_key=${api_key}&language=en-US`;
   const fetchLatest = async () => {
      const data_latest = await fetch(latest_url);
      const data_response = await data_latest.json();
      setLatest(data_response);
   };
   useEffect(() => {
      fetchLatest();
      if (latest !== null) {
         console.log(latest);
      }
   }, []);
   //? <----- end of fetch data ------->

   //! <---- utility for toggling sidebar on larger screens ---->
   window.addEventListener("resize", () => {
      let mql = window.matchMedia("(min-width: 1050px)");
      const sidebar = document.querySelector("aside");

      if (mql.matches == true) {
         sidebar.classList.add("sidebar-on");
      } else {
         sidebar.classList.remove("sidebar-on");
      }
   });
   useEffect(() => {
      let mql = window.matchMedia("(min-width: 1050px)");
      const sidebar = document.querySelector("aside");

      if (mql.matches == true) {
         sidebar.classList.add("sidebar-on");
      }
   }, []);
   return (
      <aside className="sidebar-off">
         {/* <--- Filter section of the sidebar ---> */}
         <div className="filter">
            <div className="heading">
               <FaFilter />
               <h1>Filter</h1>
            </div>
            <div className="filter-items">
               <Link className="popular" to={"/popular"}>
                  <h2>Popular</h2>
               </Link>
               <Link className="top-rated" to={"/top-rated"}>
                  <h2>Top Rated</h2>
               </Link>
               <Link className="upcoming" to={"/upcoming"}>
                  <h2>Upcoming</h2>
               </Link>
               <Link className="now-playing" to={"/now-playing"}>
                  <h2>Now Playing</h2>
               </Link>
            </div>
         </div>
         {/* <--- Latest ---> */}
         <div className="latest">
            <div className="heading">
               <FaRegPlusSquare size="1.2em" />
               <h1> Recently Added </h1>
            </div>
            <div className="latest-items">
               <ul>{latest !== null && <li id={latest.id}>{latest.title}</li>}</ul>
            </div>
         </div>
      </aside>
   );
};

export default Sidebar;
