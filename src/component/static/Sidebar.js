import React from "react";
import { FaFireAlt, FaStar, FaClock, FaPlay, FaFilter, FaRegPlusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
const Sidebar = () => {
   return (
      <aside className="sidebar-on">
         {/* <--- Filter section of the sidebar ---> */}
         <div className="filter">
            <div className="heading">
               <FaFilter />
               <h1>Filter</h1>
            </div>
            <div className="filter-items">
               <Link className="popular">
                  <h2>Popular</h2>
               </Link>
               <Link className="top-rated">
                  <h2>Top Rated</h2>
               </Link>
               <Link className="upcoming">
                  <h2>Upcoming</h2>
               </Link>
               <Link className="now-playing">
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
               <ul>
                  <li>
                     <a href="#0">Movie 1</a>
                  </li>
                  <li>
                     <a href="#0">Movie 2</a>
                  </li>
                  <li>
                     <a href="#0">Movie 3</a>
                  </li>
                  <li>
                     <a href="#0">Movie 4</a>
                  </li>
                  <li>
                     <a href="#0">Movie 5</a>
                  </li>
                  <li>
                     <a href="#0">Movie 6</a>
                  </li>
                  <li>
                     <a href="#0">Movie 7</a>
                  </li>
                  <li>
                     <a href="#0">Movie 8</a>
                  </li>
                  <li>
                     <a href="#0">Movie 9</a>
                  </li>
                  <li>
                     <a href="#0">Movie 10</a>
                  </li>
               </ul>
            </div>
         </div>
      </aside>
   );
};

export default Sidebar;
