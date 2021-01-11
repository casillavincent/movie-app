import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
   const bg_url = "https://www.themoviedb.org/t/p/original/d2UxKyaJ5GgzuHaSsWinFfv3g6L.jpg";

   return (
      <div className="landing">
         <div className="wrapper">
            <div className="content">
               <h1>Logo</h1>
               <p>Get updates on the movies you want to see!</p>
               <button>
                  {" "}
                  <Link to={"/popular"}>Browse Titles Now</Link>
               </button>
            </div>
         </div>
      </div>
   );
};

export default Landing;
