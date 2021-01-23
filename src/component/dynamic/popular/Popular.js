import React from "react";
import Sidebar from "../../static/Sidebar";
import Header from "../../static/Header";
import Footer from "../../static/Footer";
import { Link } from "react-router-dom";
import PopularMovie from "./PopularMovie";
import { api_key } from "../../../globals/variables";
import { useState, useEffect } from "react";
import { formatDate } from "../../../globals/formatDate";

const Popular = () => {
   //! <-------- useState Variable -------->
   const [popularMovies, setPopularMovies] = useState(null);
   //! <-------- Fetch data -------->
   const fetchPopularMovies = async () => {
      const data_popular = await fetch(
         `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
      );
      const response_popular = await data_popular.json();
      setPopularMovies(response_popular.results);
   };

   //! <-------- useEffect -------->
   useEffect(() => {
      fetchPopularMovies();
   }, []);

   // <----- Current Page ------>
   const [isPopular, setIsPopular] = useState(true);
   if (isPopular == true && popularMovies !== null) {
      const selector = document.querySelector("a.popular h2");
      selector.classList.add("page-id");
   }
   //* <---------- Render Component ----------------->
   return (
      <React.Fragment>
         <Header />
         <div className="wrapper">
            <Sidebar />
            <div className="render">
               {/* Featured */}
               {popularMovies !== null && (
                  <figure
                     className="featured"
                     id={`${popularMovies[0].id}`}
                     style={{
                        backgroundImage: `url("https://www.themoviedb.org/t/p/original${popularMovies[0].backdrop_path}")`,
                     }}
                  >
                     <figcaption>
                        <h2> {popularMovies[0].title} </h2>
                        <ul>
                           <li>{formatDate(popularMovies[0].release_date)}</li>
                        </ul>
                        <Link to={`/info/${popularMovies[0].id}`}>
                           <button>More Info</button>
                        </Link>
                     </figcaption>
                  </figure>
               )}
               {/*  Titles */}
               <div className="titles">
                  <h2>Popular Titles</h2>
                  <main className="render-titles">
                     {popularMovies !== null &&
                        popularMovies.map((movie) => {
                           return (
                              <PopularMovie
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

export default Popular;
