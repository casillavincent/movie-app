import React from "react";
import Sidebar from "../../static/Sidebar";
import Header from "../../static/Header";
import Footer from "../../static/Footer";
import { Link } from "react-router-dom";
import UpcomingMovie from "./UpcomingMovie";
import { api_key } from "../../../globals/variables";
import { useState, useEffect } from "react";
import { formatDate } from "../../../globals/formatDate";

const Upcoming = () => {
   //! <-------- useState Variable -------->
   const [upcomingMovies, setUpcomingMovies] = useState(null);
   //! <-------- Fetch data -------->
   const fetchUpcomingMovies = async () => {
      const data_upcoming = await fetch(
         `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`
      );
      const response_upcoming = await data_upcoming.json();
      setUpcomingMovies(response_upcoming.results);
   };

   //! <-------- useEffect -------->
   useEffect(() => {
      fetchUpcomingMovies();
   }, []);
   if (upcomingMovies !== null) {
      console.log(upcomingMovies);
   }
   // <----- Current Page ------>
   const [isUpcoming, setisUpcoming] = useState(true);
   if (isUpcoming == true && upcomingMovies !== null) {
      const selector = document.querySelector("a.upcoming h2");
      selector.classList.add("page-id");
   }
   return (
      <React.Fragment>
         <Header />
         <div className="wrapper">
            <Sidebar />
            <div className="render">
               {/* Featured */}
               {upcomingMovies !== null && (
                  <figure
                     className="featured"
                     id={`${upcomingMovies[0].id}`}
                     style={{
                        backgroundImage: `url("https://www.themoviedb.org/t/p/original${upcomingMovies[0].backdrop_path}")`,
                     }}
                  >
                     <figcaption>
                        <h2> {upcomingMovies[0].title} </h2>
                        <ul>
                           <li>{formatDate(upcomingMovies[0].release_date)}</li>
                        </ul>
                        <Link to={`/info/${upcomingMovies[0].id}`}>
                           <button>More Info</button>
                        </Link>
                     </figcaption>
                  </figure>
               )}
               {/*  Titles */}
               <div className="titles">
                  <h2>Upcoming Titles</h2>
                  <main className="render-titles">
                     {upcomingMovies !== null &&
                        upcomingMovies.map((movie) => {
                           return (
                              <UpcomingMovie
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

export default Upcoming;
