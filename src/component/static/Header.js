import React from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaHome, FaSearch, FaUserAstronaut } from "react-icons/fa";

const Header = () => {
   //? <-------- utility for toggling the sidebar in mobile mode --------->
   const toggleSidebar = () => {
      const sidebar = document.body.querySelector("aside");
      sidebar.classList.toggle("sidebar-on");
   };
   return (
      <header>
         {/* Logo */}
         <Link to={"/"} style={{ textDecoration: "none" }}>
            <div className="logo">
               <h1>butter.db</h1>
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
               <li>
                  <Link to={"/about"}>About</Link>
               </li>
            </ul>
         </nav>
         <nav className="mobile-links">
            {/* Home */}
            <Link to={"/"} className="icon">
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
