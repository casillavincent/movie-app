import React from "react";
import { Link } from "react-router-dom";
import {} from "react-icons/fa";
import { FaPlus, FaHome, FaSearch, FaUserAstronaut } from "react-icons/fa";

const Header = () => {
   return (
      <header>
         {/* Logo */}
         <div className="logo">
            <h1>butter.db</h1>
         </div>
         {/* Navigation */}
         <nav className="links">
            <ul>
               {/* Home */}
               <li>
                  <Link to={"/"}>Home</Link>
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
            <FaSearch className="browse" size="1.5em" />
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
