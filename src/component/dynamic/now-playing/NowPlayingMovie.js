import React from "react";
import { FaHeart, FaArrowRight, FaPlus } from "react-icons/fa";
import { shortenPars } from "../../../globals/shortenPars";
import { Link } from "react-router-dom";
import { formatDate } from "../../../globals/formatDate";
import { useState, useEffect } from "react";

const NowPlayingMovie = ({ title, score, id, poster, backdrop, release, overview }) => {
   const [like, setLike] = useState(false);
   const addLikes = () => {
      if (like == false) {
         setLike(true);
      } else {
         setLike(false);
      }
   };

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
            <img src={`https://www.themoviedb.org/t/p/original${poster}`} alt={title} />
         </div>
         <div className="info">
            <h2>{title}</h2>
            <p className="release-date">{formatDate(release)}</p>
            <p className="short-overview">{shortenPars(overview)}</p>
            <div className="action-btns">
               <div className="rating-btn">
                  <span className="rating">{score}</span>
                  <p> Rating </p>
               </div>
               <div className="like">
                  <FaHeart
                     onClick={() => {
                        addLikes();
                     }}
                  <p>Like</p>
               </div>

               <Link>
                  <div className="watchlist">
                     <FaPlus color="black" />
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

export default NowPlayingMovie;
