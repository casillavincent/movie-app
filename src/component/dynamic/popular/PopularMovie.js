import React from "react";
import { FaHeart, FaArrowRight, FaPlus } from "react-icons/fa";
import { makeDate } from "../../../globals/dateMaker";

const Single = ({ title, score, key, poster, backdrop, release }) => {
   return (
      <article
         className="thumbnail"
         id={key}
         onMouseEnter={() => {
            const body = window.document.querySelector("body");
            console.log(backdrop);
            body.style.backgroundImage = `url(https://www.themoviedb.org/t/p/original${backdrop})`;
         }}
      >
         <div className="poster">
            <img src={`https://www.themoviedb.org/t/p/original${poster}`} alt={title} />
         </div>
         <div className="info">
            <h2>{title}</h2>
            <p className="release-date">{makeDate(release)}</p>
            <p className="short-overview">Lorem Ipsum now</p>
            <div className="action-btns">
               <div className="rating-btn">
                  <span className="rating">{score}</span>
                  <p> Rating </p>
               </div>
               <div className="like">
                  <FaHeart />
                  <p>Like</p>
               </div>
               <div className="watchlist">
                  <FaPlus />
                  <p> Add to Watchlist</p>
               </div>
               <div className="more-info">
                  <FaArrowRight />
                  <p> More Info</p>
               </div>
            </div>
         </div>
      </article>
   );
};

export default Single;
