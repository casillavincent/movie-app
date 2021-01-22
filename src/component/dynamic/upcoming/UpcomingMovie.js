import React from "react";
import { FaHeart, FaArrowRight, FaPlus } from "react-icons/fa";
import { shortenPars } from "../../../globals/shortenPars";
import { Link } from "react-router-dom";
import { formatDate } from "../../../globals/formatDate";
import { percentNumber, ratingColor } from "../../../globals/utilities";
import { useState, useEffect } from "react";
import { addLikes, removeLikes } from "../../../globals/likes";
import { addWatchlist, removeWatchlist } from "../../../globals/watchlist";
import { toggleHeart } from "../../../globals/heart";
import { togglePlus } from "../../../globals/plus";

const UpcomingMovie = ({ title, score, id, poster, backdrop, release, overview }) => {
   const [heartState, setHeartState] = useState(false);
   const [plusState, setPlusState] = useState(false);

   useEffect(() => {
      if (toggleHeart(id) == true) {
         setHeartState(true);
      } else {
         console.log("Not in local storage");
         setHeartState(false);
      }
      if (togglePlus(id) == true) {
         setPlusState(true);
      } else {
         console.log("Not in local storage");
         setPlusState(false);
      }
   }, []);
   return (
      <article
         className="thumbnail"
         id={id}
         onMouseEnter={() => {
            const body = window.document.querySelector("body");
            body.style.backgroundImage = `url(https://www.themoviedb.org/t/p/original${backdrop})`;
         }}
      >
         <div className="poster">
            <Link to={`/info/${id}`}>
               <img src={`https://www.themoviedb.org/t/p/original${poster}`} alt={title} />
            </Link>
         </div>
         <div className="info">
            <h2>{title}</h2>
            <p className="release-date">{formatDate(release)}</p>
            <p className="short-overview">{shortenPars(overview)}</p>
            <div className="action-btns">
               <div className="rating-btn">
                  <span className="rating" style={{ backgroundColor: `${ratingColor(score)}` }}>
                     {percentNumber(score)}
                  </span>
                  <p> Rating </p>
               </div>
               <Link>
                  <div className="like">
                     <FaHeart
                        color={heartState == true ? "red" : "black"}
                        onClick={() => {
                           addLikes(title, id, score, poster, release);
                           toggleHeart(id);
                           setHeartState(true);
                           if (heartState == true) {
                              console.log("Removing Movie: " + title);
                              removeLikes(id);
                              setHeartState(false);
                           }
                        }}
                     />{" "}
                     <p>Like</p>
                  </div>
               </Link>

               <Link>
                  <div className="watchlist">
                     <FaPlus
                        color="black"
                        color={plusState == true ? "#4CB396" : "black"}
                        // Toggles the watchlist
                        onClick={() => {
                           addWatchlist(title, id, score, poster, release);
                           togglePlus(id);
                           setPlusState(true);
                           if (plusState == true) {
                              console.log("Removing Movie: " + title);
                              removeWatchlist(id);
                              setPlusState(false);
                           }
                        }}
                     />
                     <p> Add to Watchlist</p>
                  </div>
               </Link>

               <Link to={`/info/${id}`}>
                  <div className="more-info">
                     <FaArrowRight color="black" />
                     <p> More Info</p>
                  </div>
               </Link>
            </div>
         </div>
      </article>
   );
};

export default UpcomingMovie;
