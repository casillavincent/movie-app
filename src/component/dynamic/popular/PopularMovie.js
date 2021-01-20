import React from "react";
import { FaHeart, FaArrowRight, FaPlus } from "react-icons/fa";
import { shortenPars } from "../../../globals/shortenPars";
import { Link } from "react-router-dom";
import { formatDate } from "../../../globals/formatDate";
import { percentNumber, ratingColor } from "../../../globals/utilities";
import { useState, useEffect } from "react";

//* Manage Favourites
import { addLikes, removeLikes } from "../../../globals/likes";
import { addWatchlist, removeWatchlist } from "../../../globals/watchlist";
const PopularMovie = ({ title, score, id, poster, backdrop, release, overview }) => {
   //* Toggles if the heart has been liked or unliked
   let isLiked = false;
   const toggleLike = (id) => {
      if (isLiked == false) {
         isLiked = true;
      } else {
         isLiked = false;
      }
      console.log("Movie is liked: " + isLiked);
      addOrRemoveLikes(id);
   };

   //* Adds or remove the color
   const addOrRemoveLikes = (id) => {
      if (isLiked == true) {
         console.log("Adding to Likes");

         //If Likes doesnt exist create it in local storage
         if (localStorage.HeartStatus == undefined) {
            localStorage.setItem("HeartStatus", JSON.stringify([]));
         }

         const data_heartStatus = localStorage.getItem("HeartStatus");
         const response_heartStatus = JSON.parse(data_heartStatus);

         //* Check if the id of the movie exists in the local storage array
         const indexOfQuery = response_heartStatus.findIndex(
            (heart_id) => `heart-${id}` == heart_id
         );
         if (indexOfQuery < 0) {
            response_heartStatus.push(`heart-${id}`);
         }

         localStorage.setItem("HeartStatus", JSON.stringify(response_heartStatus));
      } else {
         console.log("Removing from Likes");

         const data_heartStatus = localStorage.getItem("HeartStatus");
         const response_heartStatus = JSON.parse(data_heartStatus);

         //* Check if the id of the movie exists in the local storage array
         const indexOfQuery = response_heartStatus.findIndex(
            (heart_id) => `heart-${id}` == heart_id
         );

         //* Remove the index of the id from local storage
         //* Check if the indexQuery exists (not -1)
         if (indexOfQuery > -1) {
            response_heartStatus.splice(indexOfQuery, 1);
         } else {
            console.log("ID doesnt exists");
         }

         //* Store to local storage
         localStorage.setItem("HeartStatus", JSON.stringify(response_heartStatus));
      }
   };
   const [heartColor, setHeartColor] = useState("black");

   function changeHeartColor(id) {
      const data_heartStatus = localStorage.getItem("HeartStatus");
      const response_heartStatus = JSON.parse(data_heartStatus);

      if (response_heartStatus.includes(`heart-${id}`)) {
         setHeartColor("red");
         isLiked = true;
      } else {
         setHeartColor("black");
      }
   }
   useEffect(() => {
      changeHeartColor(id);
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
            <img src={`https://www.themoviedb.org/t/p/original${poster}`} alt={title} />
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
                     className={`heart-${id}`}
                     color={heartColor}
                     onClick={() => {
                        toggleLike(id);
                        changeHeartColor(id);
                     }}
                  />{" "}
                  <p>Like</p>
               </div>

               <div className="watchlist">
                  <FaPlus
                     color="black"
                     onClick={() => {
                        addWatchlist(title, id, score, poster);
                     }}
                  />
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
