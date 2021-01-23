export const toggleHeart = (id) => {
   const data_likes = localStorage.getItem("Likes");
   const response_likes = JSON.parse(data_likes);

   if (localStorage.Likes !== undefined) {
      const indexOfQuery = response_likes.findIndex((movie) => id == movie.movieId);
      if (indexOfQuery >= 0) {
         console.log("This movie is in the local storage");
         return true;
      } else {
         console.log("This movie is NOT in the local storage");
         return false;
      }
   }
};
