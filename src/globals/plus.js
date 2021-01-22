export const togglePlus = (id) => {
   const data_watchlist = localStorage.getItem("Watchlist");
   const response_watchlist = JSON.parse(data_watchlist);

   if (localStorage.Watchlist !== undefined) {
      const indexOfQuery = response_watchlist.findIndex((movie) => id == movie.movieId);
      if (indexOfQuery >= 0) {
         return true;
      } else {
         return false;
      }
   }
};
