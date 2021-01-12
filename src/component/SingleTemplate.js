import React from "react";
import { FaHeart, FaArrowRight, FaPlus, FaFire } from "react-icons/fa";

const Single = () => {
   return (
      <article className="thumbnail">
         <div className="poster">
            <img
               src="https://www.themoviedb.org/t/p/original/ioOjEgaduadwBJiDKYkvD5T8kMY.jpg"
               alt="Poster"
            />
         </div>
         <div className="info">
            <h2>Mulan</h2>
            <p className="release-date">Jan 15, 1996</p>
            <p className="short-overview">Lorem Ipsum now</p>
            <div className="action-btns">
               <div className="rating-btn">
                  <span className="rating">99%</span>
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
