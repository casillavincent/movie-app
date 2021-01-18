import React from "react";
import Sidebar from "../../static/Sidebar";
import Header from "../../static/Header";
import Footer from "../../static/Footer";
import { Link } from "react-router-dom";
import NowPlayingMovie from "./NowPlayingMovie";
import { api_key } from "../../../globals/variables";
import { useState, useEffect } from "react";
import { formatDate } from "../../../globals/formatDate";

const NowPlaying = () => {
   //! <-------- useState Variable -------->
   const [nowPlaying, setNowPlaying] = useState(null);
   //! <-------- Fetch data -------->
   const fetchNowPlaying = async () => {
      const data_now_playing = await fetch(
         `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`
      );
      const response_now_playing = await data_now_playing.json();
      setNowPlaying(response_now_playing.results);
   };

   //! <-------- useEffect -------->
   useEffect(() => {
      fetchNowPlaying();
   }, []);
   // if (nowPlaying !== null) {
   //    console.log(nowPlaying);
   // }
   // <----- Current Page ------>
   const [isNowPlaying, setIsNowPlaying] = useState(true);
   if (isNowPlaying == true && nowPlaying !== null) {
      const selector = document.querySelector("a.now-playing h2");
      selector.classList.add("page-id");
   }
   return (
      <React.Fragment>
         <Header />
         <div className="wrapper">
            <Sidebar />
            <div className="render">
               {/* Featured */}
               {nowPlaying !== null && (
                  <figure
                     className="featured"
                     id={`${nowPlaying[0].id}`}
                     style={{
                        backgroundImage: `url("https://www.themoviedb.org/t/p/original${nowPlaying[0].backdrop_path}")`,
                     }}
                  >
                     <figcaption>
                        <h2> {nowPlaying[0].title} </h2>
                        <ul>
                           <li>{formatDate(nowPlaying[0].release_date)}</li>
                        </ul>
                        <Link to={`/info/${nowPlaying[0].id}`}>
                           <button>More Info</button>
                        </Link>
                     </figcaption>
                  </figure>
               )}
               {/*  Titles */}
               <div className="titles">
                  <h2>Now Playing</h2>
                  <main className="render-titles">
                     {nowPlaying !== null &&
                        nowPlaying.map((movie) => {
                           return (
                              <NowPlayingMovie
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

export default NowPlaying;
