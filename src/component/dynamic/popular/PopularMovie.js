import React from "react";
import { FaHeart, FaArrowRight, FaPlus } from "react-icons/fa";
import { shortenPars } from "../../../globals/shortenPars";
import { Link } from "react-router-dom";
import { formatDate } from "../../../globals/formatDate";
import { percentNumber, ratingColor } from "../../../globals/utilities";
import { toggleHeart } from "../../../globals/heart";
import { togglePlus } from "../../../globals/plus";
import { useState, useEffect } from "react";

//* Manage Favourites
import { addLikes, removeLikes } from "../../../globals/likes";
import { addWatchlist, removeWatchlist } from "../../../globals/watchlist";
const PopularMovie = ({ title, score, id, poster, backdrop, release, overview }) => {
   const [heartState, setHeartState] = useState(false);
   const [plusState, setPlusState] = useState(false);
   useEffect(() => {
      if (toggleHeart(id) == true) {
         setHeartState(true);
      } else {
         setHeartState(false);
      }
      if (togglePlus(id) == true) {
         setPlusState(true);
      } else {
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
               <img src={`https://www.themoviedb.org/t/p/original${poster}`} alt={title} />{" "}
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
               <div className="like">
                  <FaHeart
                     size="1.1em"
                     className={`heart-${id}`}
                     color={heartState == true ? "red" : "black"}
                     onClick={() => {
                        addLikes(title, id, score, poster, release);
                        toggleHeart(id);
                        setHeartState(true);
                        if (heartState == true) {
                           removeLikes(id);
                           setHeartState(false);
                        }
                     }}
                  />{" "}
                  <p>Like</p>
               </div>
               <div className="watchlist">
                  <FaPlus
                     size="1.1em"
                     color={plusState == true ? "#7995E6" : "black"}
                     // Toggles the watchlist
                     onClick={() => {
                        addWatchlist(title, id, score, poster, release);
                        togglePlus(id);
                        setPlusState(true);
                        if (plusState == true) {
                           removeWatchlist(id);
                           setPlusState(false);
                        }
                     }}
                  />
                  <p> Add to Watchlist</p>
               </div>
               <Link to={`/info/${id}`}>
                  <div className="more-info">
                     <FaArrowRight color="black" size="1.1em" />
                     <p> More Info</p>
                  </div>
               </Link>
            </div>
         </div>
      </article>
   );
};

export default PopularMovie;
