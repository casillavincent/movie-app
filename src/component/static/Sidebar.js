import React from "react";
import { FaStar, FaFilter, FaRegPlusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { api_key, poster_base } from "../../globals/variables";
import { useState, useEffect } from "react";
import { percentNumber, ratingColor } from "../../globals/utilities";

const Sidebar = () => {
   //? <----- fetch data ----->
   const [latest, setLatest] = useState(null);
   const latest_url = `https://api.themoviedb.org/3/movie/latest?api_key=${api_key}&language=en-US`;

   const fetchLatest = async () => {
      const data_latest = await fetch(latest_url);
      const data_response = await data_latest.json();
      setLatest(data_response);
   };

   const [trending, setTrending] = useState(null);
   const fetchTrending = async () => {
      const data_trending = await fetch(
         `https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`
      );
      const response_trending = await data_trending.json();
      setTrending(response_trending.results);
   };
   useEffect(() => {
      fetchLatest();
      fetchTrending();
   }, []);

   //? <---- utility for toggling sidebar on larger screens ---->
   window.addEventListener("resize", () => {
      let mql = window.matchMedia("(min-width: 1050px)");
      const sidebar = document.querySelector("aside");

      if (mql.matches == true) {
         sidebar.classList.add("sidebar-on");
      } else {
         sidebar.classList.remove("sidebar-on");
      }
   });

   useEffect(() => {
      let mql = window.matchMedia("(min-width: 1050px)");
      const sidebar = document.querySelector("aside");

      if (mql.matches == true) {
         sidebar.classList.add("sidebar-on");
      }
   }, []);

   return (
      <aside className="sidebar-off">
         {/* <--- Filter section of the sidebar ---> */}
         <div className="filter">
            <div className="heading">
               <FaFilter />
               <h1>Filter</h1>
            </div>
            <div className="filter-items">
               <Link className="popular" to={"/popular"}>
                  <h2>Popular</h2>
               </Link>
               <Link className="top-rated" to={"/top-rated"}>
                  <h2>Top Rated</h2>
               </Link>
               <Link className="upcoming" to={"/upcoming"}>
                  <h2>Upcoming</h2>
               </Link>
               <Link className="now-playing" to={"/now-playing"}>
                  <h2>Now Playing</h2>
               </Link>
            </div>
         </div>

         {/* <--- Latest ---> */}
         <div className="latest">
            <div className="heading">
               <FaRegPlusSquare size="1.2em" />
               <h1> Recently Added </h1>
            </div>
            <div className="latest-items">
               <ul>{latest !== null && <li id={latest.id}>{latest.title}</li>}</ul>
            </div>
         </div>

         {/* <---- Trending ----> */}
         <div className="trending">
            <div className="heading">
               <FaStar size="1em" />
               <h1>Trending Titles</h1>
            </div>
            <div className="trending-items">
               {trending !== null && (
                  <ul>
                     {/* First Item */}
                     <li
                        className="trending-item"
                        onClick={() => {
                           window.location.reload();
                        }}
                     >
                        <Link to={`/info/${trending[0].id}`}>
                           <span
                              style={{
                                 backgroundColor: `${ratingColor(trending[0].vote_average)}`,
                              }}
                              className="rating"
                           >
                              {percentNumber(trending[0].vote_average)}
                           </span>
                           {trending[0].title}{" "}
                        </Link>
                     </li>

                     {/* Second Item */}
                     <li
                        className="trending-item"
                        onClick={() => {
                           window.location.reload();
                        }}
                     >
                        <Link to={`/info/${trending[1].id}`}>
                           <span
                              style={{
                                 backgroundColor: `${ratingColor(trending[1].vote_average)}`,
                              }}
                              className="rating"
                           >
                              {percentNumber(trending[1].vote_average)}
                           </span>
                           {trending[1].title}{" "}
                        </Link>
                     </li>

                     {/* Third Item */}
                     <li
                        className="trending-item"
                        onClick={() => {
                           window.location.reload();
                        }}
                     >
                        <Link to={`/info/${trending[2].id}`}>
                           <span
                              style={{
                                 backgroundColor: `${ratingColor(trending[2].vote_average)}`,
                              }}
                              className="rating"
                           >
                              {percentNumber(trending[2].vote_average)}
                           </span>
                           {trending[2].title}{" "}
                        </Link>
                     </li>

                     {/* FOurth Item */}
                     <li
                        className="trending-item"
                        onClick={() => {
                           window.location.reload();
                        }}
                     >
                        <Link to={`/info/${trending[3].id}`}>
                           <span
                              style={{
                                 backgroundColor: `${ratingColor(trending[3].vote_average)}`,
                              }}
                              className="rating"
                           >
                              {percentNumber(trending[3].vote_average)}
                           </span>
                           {trending[3].title}{" "}
                        </Link>
                     </li>

                     {/* Fifth item */}
                     <li
                        className="trending-item"
                        onClick={() => {
                           window.location.reload();
                        }}
                     >
                        <Link to={`/info/${trending[4].id}`}>
                           <span
                              style={{
                                 backgroundColor: `${ratingColor(trending[4].vote_average)}`,
                              }}
                              className="rating"
                           >
                              {percentNumber(trending[4].vote_average)}
                           </span>{" "}
                           {trending[4].title}{" "}
                        </Link>
                     </li>

                     {/* Sixth Item */}
                     <li
                        className="trending-item"
                        onClick={() => {
                           window.location.reload();
                        }}
                     >
                        <Link to={`/info/${trending[5].id}`}>
                           <span
                              style={{
                                 backgroundColor: `${ratingColor(trending[5].vote_average)}`,
                              }}
                              className="rating"
                           >
                              {percentNumber(trending[5].vote_average)}
                           </span>
                           {trending[5].title}{" "}
                        </Link>
                     </li>

                     {/* Seventh Item */}
                     <li
                        className="trending-item"
                        onClick={() => {
                           window.location.reload();
                        }}
                     >
                        <Link to={`/info/${trending[6].id}`}>
                           <span
                              style={{
                                 backgroundColor: `${ratingColor(trending[6].vote_average)}`,
                              }}
                              className="rating"
                           >
                              {percentNumber(trending[6].vote_average)}
                           </span>
                           {trending[6].title}{" "}
                        </Link>
                     </li>
                  </ul>
               )}
            </div>
         </div>
      </aside>
   );
};

export default Sidebar;
