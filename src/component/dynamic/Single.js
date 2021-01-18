import React from "react";
import { api_key, poster_base, backdrop_base } from "../../globals/variables";
import { useState, useEffect } from "react";
import { FaHeart, FaPlus, FaUserAlt, FaStar, FaClock } from "react-icons/fa";
import { formatDate } from "../../globals/formatDate";
import { floorNumber } from "../../globals/utilities";
//Components
import Header from "../static/Header";
import Footer from "../static/Footer";
import Sidebar from "../static/Sidebar";
const Single = (match) => {
   //? <------- fetch the individual movie info --------->
   const [movieInfo, setMovieInfo] = useState(null);
   const fetchSingleItem = async () => {
      const data_id = await fetch(
         `https://api.themoviedb.org/3/movie/${match.match.params.id}?api_key=${api_key}&language=en-US`
      );
      const response_id = await data_id.json();
      setMovieInfo(response_id);
   };
   //? <------ fetch the individual movie cast --------->
   const [cast, setCast] = useState(null);
   const fetchCast = async () => {
      let url = `https://api.themoviedb.org/3/movie/${match.match.params.id}/credits?api_key=${api_key}&language=en-US`;
      const data_cast = await fetch(url);
      const response_cast = await data_cast.json();
      setCast(response_cast);
   };
   //! <----- Utility for changing the background to current movie on load ------>
   const changeBackdropToCurrent = () => {
      let bodySelector = window.document.querySelector("body");
      if (movieInfo !== null) {
         let url = `${backdrop_base}${movieInfo.backdrop_path}`;
         bodySelector.style.backgroundImage = `url(${url})`;
      }
   };
   window.onload = () => {
      changeBackdropToCurrent();
   };

   //? <------ fetch effect to run the function once on component render ------->
   useEffect(() => {
      fetchSingleItem();
      fetchCast();
   }, []);

   //? <------ console.log() the movieInfo object ------->
   // if (movieInfo !== null) {
   //    console.log(movieInfo);
   // }
   if (cast !== null) {
      console.log(cast);
   }

   //* <---------- Render Component Below ------------>
   return (
      <React.Fragment>
         <Header />
         <div className="wrapper">
            {" "}
            <Sidebar />
            <div className="single-container">
               <div className="render-single">
                  {/* <----- Above the fold info -----> */}
                  <img
                     src={movieInfo !== null && `${poster_base}${movieInfo.poster_path}`}
                     alt={movieInfo !== null && `${movieInfo.title}`}
                     width="250"
                     className="poster"
                  />
                  {/* <-------- General Info Section ----------> */}
                  {movieInfo !== null && (
                     <div className="general-info">
                        <h1 className="title">
                           {movieInfo.title}{" "}
                           <span className="rating">{movieInfo.vote_average}</span>
                        </h1>
                        <hr />
                        <ul className="header">
                           <li className="adult">
                              {movieInfo.adult == true ? "Rated-R" : "PG-13"}
                           </li>
                           <li className="status">{movieInfo.status}</li>
                           <li className="runtime">{movieInfo.runtime + " min"}</li>
                           <li className="one-genre">{movieInfo.genres[0].name}</li>
                           <li className="language">
                              {movieInfo.spoken_languages[0].english_name}
                           </li>
                        </ul>

                        <h2 className="release">
                           <span>Release Date:</span> {formatDate(movieInfo.release_date)}
                        </h2>
                        <p className="tagline">
                           {movieInfo.tagline !== null
                              ? movieInfo.tagline
                              : "Movie does not contain a tagline."}
                        </p>
                        {/* Overview */}
                        <h2 className="overview-title"> Overview</h2>
                        <p className="overview">{movieInfo.overview}</p>
                        {/* Action Buttons */}
                        <div className="single-action-btns">
                           <div className="single-votes">
                              <FaUserAlt size="1.5em" color="black" />
                              <p>
                                 {floorNumber(movieInfo.vote_count)} <br />
                                 Votes
                              </p>
                           </div>
                           <div className="single-popularity">
                              <FaStar size="1.5em" color="black" />
                              <p> {floorNumber(movieInfo.popularity)} Popularity</p>
                           </div>
                           <div className="single-like">
                              <FaHeart size="1.5em" color="black" />
                              <p>Like</p>
                           </div>
                           <div className="single-watchlist">
                              <FaPlus size="1.5em" color="black" />
                              <p> Add to Watchlist</p>
                           </div>
                        </div>
                     </div>
                  )}

                  {/* <---------- Cast and Crew --------------> */}
                  <div className="cast">
                     <h2 className="cast-title">Cast and Crew</h2>
                     <div className="render-cast">
                        {cast !== null && cast.cast.length > 0 ? (
                           cast.cast.map((person) => {
                              return (
                                 <div className="cast-member">
                                    <img
                                       src={
                                          person.profile_path == null
                                             ? "/assets/blank.svg"
                                             : `${poster_base}${person.profile_path}`
                                       }
                                       alt={person.name}
                                       width="200"
                                    />
                                    <p className="name">{person.name}</p>
                                    <p className="character">{person.character}</p>
                                 </div>
                              );
                           })
                        ) : (
                           <p className="no-cast"> No Cast to Fetch </p>
                        )}
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <Footer />
      </React.Fragment>
   );
};

export default Single;
