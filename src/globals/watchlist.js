//* <-------- Add to Watchlist -------->
export const addWatchlist = (title, id, rating, poster, release) => {
   const movieToBeAdded = {
      movieTitle: title,
      movieId: id,
      movieRating: rating,
      moviePoster: poster,
      movieRelease: release,
   };
   //If Watchlist doesnt exist create it in local storage
   if (localStorage.Watchlist == undefined) {
      localStorage.setItem("Watchlist", JSON.stringify([]));
   }

   const data_watchlist = localStorage.getItem("Watchlist");
   const response_watchlist = JSON.parse(data_watchlist);

   //* Check if the id of the movie exists in the local storage array
   const indexOfQuery = response_watchlist.findIndex((movie) => id == movie.movieId);
   if (indexOfQuery < 0) {
      response_watchlist.push(movieToBeAdded);
   }

   localStorage.setItem("Watchlist", JSON.stringify(response_watchlist));
};

//! <------- Remove Watchlist ----------->
export const removeWatchlist = (id) => {
   const data_watchlist = localStorage.getItem("Watchlist");
   const response_watchlist = JSON.parse(data_watchlist);

   //* Check if the id of the movie exists in the local storage array
   const indexOfQuery = response_watchlist.findIndex((movie) => id == movie.movieId);

   //* Remove the index of the id from local storage
   //* Check if the indexQuery exists (not -1)
   if (indexOfQuery > -1) {
      response_watchlist.splice(indexOfQuery, 1);
   }

   //* Store to local storage
   localStorage.setItem("Watchlist", JSON.stringify(response_watchlist));
};
