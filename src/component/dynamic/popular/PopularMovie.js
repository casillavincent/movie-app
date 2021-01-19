import React from "react";
import { FaHeart, FaArrowRight, FaPlus } from "react-icons/fa";
import { shortenPars } from "../../../globals/shortenPars";
import { Link } from "react-router-dom";
import { formatDate } from "../../../globals/formatDate";
import { useState } from "react";

const PopularMovie = ({ title, score, id, poster, backdrop, release, overview }) => {
   const [heart, setHeart] = useState(false);

   const addToLikes = () => {
      if (heart == false) {
         setHeart(true);
      } else {
         setHeart(false);
         console.log(heart);
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
                     color={heart == false ? "black" : "red"}
                     onClick={() => {
                        addToLikes();
                     }}
                  />{" "}
                  <p>Like</p>
               </div>

               <div className="watchlist">
                  <FaPlus color="black" />
                  <p> Add to Watchlist</p>
               </div>

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

export default PopularMovie;
