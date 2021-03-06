import React from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaHome, FaSearch, FaUserAstronaut } from "react-icons/fa";

const Header = () => {
   //? <-------- utility for toggling the sidebar in mobile mode --------->
   const toggleSidebar = () => {
      const sidebar = document.body.querySelector("aside");
      const footerSelector = document.querySelector("footer");
      sidebar.classList.toggle("sidebar-on");

      //Turn off footer when sidebar is on
      footerSelector.classList.toggle("footer-off");
   };

   return (
      <header>
         {/* Logo */}
         <Link to={"/"} style={{ textDecoration: "none" }}>
            <div className="logo">
               <h1>Butter.DB</h1>
            </div>
         </Link>
         {/* Navigation */}
         <nav className="links">
            <ul>
               {/* Home */}
               <li>
                  <Link to={"/popular"}>Home</Link>
               </li>

               {/* Favourites */}
               <li>
                  <Link to={"/favourites"}>Favourites</Link>
               </li>

               {/* About */}
               <li className="about-btn-container">
                  <Link to={"/about"}>About</Link>
               </li>
            </ul>
         </nav>
         <nav className="mobile-links">
            {/* Home */}
            <Link to={"/popular"} className="icon">
               <FaHome size="1.5em" />
            </Link>
            {/* Search */}
            <FaSearch
               className="browse"
               size="1.5em"
               onClick={() => {
                  toggleSidebar();
               }}
            />
            {/* Favourites */}
            <Link to={"/favourites"} className="icon">
               <FaPlus size="1.5em" />
            </Link>
            {/* About */}
            <Link to={"/about"} className="icon">
               <FaUserAstronaut size="1.5em" />
            </Link>
         </nav>
      </header>
   );
};

export default Header;
