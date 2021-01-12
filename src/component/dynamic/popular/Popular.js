import React from "react";
import Sidebar from "../../static/Sidebar";
import Header from "../../static/Header";
import Footer from "../../static/Footer";
import { FaFireAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import PopularMovie from "./PopularMovie";
import { api_key } from "../../../globals/variables";
import { useState, useEffect } from "react";

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
      console.log(popularMovies);
   };
   //! <-------- useEffect -------->
   useEffect(() => {
      fetchPopularMovies();
   }, []);
   return (
      <React.Fragment>
         <Header />
         <div className="wrapper">
            <Sidebar />
            <div className="render">
               {/* Filter Title
               <div className="filter-title">
                  <FaFireAlt size="1.5em" />
                  <h1> Popular </h1>
               </div> */}
               {/* Featured */}
               {popularMovies !== null && (
                  <figure
                     className="featured"
                     style={{
                        backgroundImage: `url("https://www.themoviedb.org/t/p/original${popularMovies[0].backdrop_path}")`,
                     }}
                  >
                     <figcaption>
                        <h2> {popularMovies[0].title} </h2>
                        <ul>
                           <li>Romance</li>
                           <li>Foreign</li>
                           <li>Indie</li>
                        </ul>
                        <button>
                           <Link>More Info</Link>
                        </button>
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
                                 key={movie.id}
                                 poster={movie.poster_path}
                                 backdrop={movie.backdrop_path}
                                 release={movie.release_date}
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
