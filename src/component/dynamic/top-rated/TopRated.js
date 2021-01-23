import React from "react";
import Sidebar from "../../static/Sidebar";
import Header from "../../static/Header";
import Footer from "../../static/Footer";
import { Link } from "react-router-dom";
import TopRatedMovie from "./TopRatedMovie";
import { api_key } from "../../../globals/variables";
import { useState, useEffect } from "react";
import { formatDate } from "../../../globals/formatDate";

const TopRated = () => {
   //! <-------- useState Variable -------->
   const [topRatedMovies, setTopRatedMovies] = useState(null);
   //! <-------- Fetch data -------->
   const fetchTopRatedMovies = async () => {
      const data_popular = await fetch(
         `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`
      );
      const response_popular = await data_popular.json();
      setTopRatedMovies(response_popular.results);
   };

   //! <-------- useEffect -------->
   useEffect(() => {
      fetchTopRatedMovies();
   }, []);

   // <----- Current Page ------>
   const [isTopRated, setisTopRated] = useState(true);
   if (isTopRated == true && topRatedMovies !== null) {
      const selector = document.querySelector("a.top-rated h2");
      selector.classList.add("page-id");
   }
   return (
      <React.Fragment>
         <Header />
         <div className="wrapper">
            <Sidebar />
            <div className="render">
               {/* Featured */}
               {topRatedMovies !== null && (
                  <figure
                     className="featured"
                     id={`${topRatedMovies[0].id}`}
                     style={{
                        backgroundImage: `url("https://www.themoviedb.org/t/p/original${topRatedMovies[0].backdrop_path}")`,
                     }}
                  >
                     <figcaption>
                        <h2> {topRatedMovies[0].title} </h2>
                        <ul>
                           <li>{formatDate(topRatedMovies[0].release_date)}</li>
                        </ul>
                        <Link to={`/info/${topRatedMovies[0].id}`}>
                           <button>More Info</button>
                        </Link>
                     </figcaption>
                  </figure>
               )}
               {/*  Titles */}
               <div className="titles">
                  <h2>Top Rated Titles</h2>
                  <main className="render-titles">
                     {topRatedMovies !== null &&
                        topRatedMovies.map((movie) => {
                           return (
                              <TopRatedMovie
                                 title={movie.title}
                                 score={movie.vote_average}
                                 id={movie.id}
                                 poster={movie.poster_path}
                                 backdrop={movie.backdrop_path}
                                 release={movie.release_date}
                                 overview={movie.overview}
                              />
                           );
                        })}
                  </main>
               </div>
            </div>
         </div>
         <Footer />
      </React.Fragment>
   );
};

export default TopRated;
