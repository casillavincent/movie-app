import React from "react";
import { Link } from "react-router-dom";
import { FaFireAlt, FaStar, FaClock, FaPlay } from "react-icons/fa";

const Landing = () => {
   const bg_url = "https://www.themoviedb.org/t/p/original/d2UxKyaJ5GgzuHaSsWinFfv3g6L.jpg";

   return (
      <div className="landing">
         <div className="landing-wrapper">
            <div className="content">
               <h1>Butter.db</h1>
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
                     <Link>
                        <FaStar size="1.75em" />
                        <p>Top Rated</p>
                     </Link>
                  </div>
                  <div className="upcoming">
                     {/* Upcoming */}
                     <Link>
                        <FaClock size="1.75em" />
                        <p>Upcoming</p>
                     </Link>
                  </div>
                  <div className="now-playing">
                     {/* Now Playing */}
                     <Link>
                        <FaPlay size="1.75em" />
                        <p>Now Playing</p>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Landing;
