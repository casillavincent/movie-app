import React from "react";
import { Link } from "react-router-dom";
import { FaFireAlt, FaStar, FaClock, FaPlay, FaPlus, FaUserAstronaut } from "react-icons/fa";

const Landing = () => {
   const bg_url = "https://www.themoviedb.org/t/p/original/d2UxKyaJ5GgzuHaSsWinFfv3g6L.jpg";

   return (
      <div className="landing">
         <div className="landing-wrapper">
            <div className="content">
               <h1>Butter.DB</h1>
               <p>Get updates on the movies you want to see!</p>
               <div className="hotlinks">
                  <div className="popular">
                     {/* Popular */}
                     <Link to={"/popular"}>
                        <FaFireAlt size="1.75em" />
                        <p>Popular</p>
                     </Link>
                  </div>
                  <div className="top-rated">
                     {/* Top Rated */}
                     <Link to={"/top-rated"}>
                        <FaStar size="1.75em" />
                        <p>Top Rated</p>
                     </Link>
                  </div>
                  <div className="upcoming">
                     {/* Upcoming */}
                     <Link to={"/upcoming"}>
                        <FaClock size="1.75em" />
                        <p>Upcoming</p>
                     </Link>
                  </div>
                  <div className="now-playing">
                     {/* Now Playing */}
                     <Link to={"/now-playing"}>
                        <FaPlay size="1.75em" />
                        <p>Now Playing</p>
                     </Link>
                  </div>
                  <div className="favourites">
                     {/* Favourites */}
                     <Link to={"/favourites"}>
                        <FaPlus size="1.75em" />
                        <p>Favourites</p>
                     </Link>
                  </div>
                  <div className="about">
                     {/* Favourites */}
                     <Link to={"/about"}>
                        <FaUserAstronaut size="1.75em" />
                        <p>About</p>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Landing;
