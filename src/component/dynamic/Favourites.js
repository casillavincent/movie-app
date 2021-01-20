import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { formatDate } from "../../globals/formatDate";
import { percentNumber, ratingColor } from "../../globals/utilities";
import { removeWatchlist } from "../../globals/watchlist";
import { removeLikes } from "../../globals/likes";
//Components
import Header from "../static/Header";
import Footer from "../static/Footer";
import Sidebar from "../static/Sidebar";
import { FaHeart, FaPlus } from "react-icons/fa";

const Favourites = () => {
   const [liked, setLiked] = useState(null);
   const [watchlist, setWatchlist] = useState(null);
   //* Likes
   const fetchLocalStorage = () => {
      //Likes
      const data_liked = localStorage.getItem("Likes");
      const response_liked = JSON.parse(data_liked);

      //Watchlist
      const data_watchlist = localStorage.getItem("Watchlist");
      const response_watchlist = JSON.parse(data_watchlist);
      setLiked(response_liked);
      setWatchlist(response_watchlist);

      console.log(liked);
      console.log(watchlist);
   };
   useEffect(() => {
      fetchLocalStorage();
   }, []);
   return (
      <React.Fragment>
         <Header />
         <div className="wrapper">
            <Sidebar />
            <div className="favourites-container">
               {/* Likes */}
               <div className="likes-container">
                  <h2 className="title-likes">
                     {" "}
                     <span>
                        <FaHeart size="0.75em" color="red" />
                     </span>
                     My Likes
                  </h2>
                  <div className="render-likes">
                     {/* Map all liked items from local storage */}
                     {liked !== null ? (
                        liked.map((movie) => {
                           return (
                              <div className="likes-item">
                                 <img
                                    src={`https://www.themoviedb.org/t/p/original${movie.moviePoster}`}
                                    alt={`${movie.movieId}`}
                                    width="150"
                                 />
                                 <div className="info">
                                    <p className="title">
                                       {movie.movieTitle}{" "}
                                       <span
                                          style={{
                                             backgroundColor: ratingColor(movie.movieRating),
                                          }}
                                       >
                                          {percentNumber(movie.movieRating)}
                                       </span>
                                    </p>
                                    <p className="release">{formatDate(movie.movieRelease)}</p>
                                    <div className="action-btns">
                                       <button
                                          className="remove"
                                          onClick={() => {
                                             removeLikes(movie.movieId);
                                             fetchLocalStorage();
                                          }}
                                       >
                                          Remove
                                       </button>
                                       <button className="more-info">
                                          <Link>More Info</Link>
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           );
                        })
                     ) : (
                        <p> No Movies to Show</p>
                     )}
                  </div>
               </div>

               {/* Watchlist */}
               <div className="watchlist-container">
                  <h2 className="title-watchlist">
                     <span>
                        <FaPlus size="0.75em" />
                     </span>
                     My Watchlist
                  </h2>
                  <div className="render-watchlist">
                     {/* Watchlist Items */}
                     {watchlist !== null &&
                        watchlist.map((movie) => {
                           return (
                              <div className="watchlist-item">
                                 <img
                                    src={`https://www.themoviedb.org/t/p/original${movie.moviePoster}`}
                                    alt={`${movie.movieTitle}`}
                                    width="150"
                                 />
                                 <div className="info">
                                    <p className="title">
                                       {movie.movieTitle}{" "}
                                       <span
                                          style={{
                                             backgroundColor: `${ratingColor(movie.movieRating)}`,
                                          }}
                                       >
                                          {percentNumber(movie.movieRating)}
                                       </span>
                                    </p>
                                    <p className="release">January 15, 1996</p>
                                    <div className="action-btns">
                                       <button
                                          className="remove"
                                          onClick={() => {
                                             removeWatchlist(movie.movieId);
                                             fetchLocalStorage();
                                          }}
                                       >
                                          Remove
                                       </button>
                                       <button className="more-info">
                                          <Link>More Info</Link>
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           );
                        })}
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </React.Fragment>
   );
};

export default Favourites;
