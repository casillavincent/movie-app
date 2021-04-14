// <-------- Add to Likes -------->
export const addLikes = (title, id, rating, poster, release) => {
   const movieToBeAdded = {
      movieTitle: title,
      movieId: id,
      movieRating: rating,
      moviePoster: poster,
      movieRelease: release,
   };
   // If Likes doesnt exist create it in local storage
   if (localStorage.Likes === undefined) {
      localStorage.setItem("Likes", JSON.stringify([]));
   }

   const data_likes = localStorage.getItem("Likes");
   const response_likes = JSON.parse(data_likes);

   // Check if the id of the movie exists in the local storage array
   const indexOfQuery = response_likes.findIndex((movie) => id === movie.movieId);
   if (indexOfQuery < 0) {
      response_likes.push(movieToBeAdded);
   }

   localStorage.setItem("Likes", JSON.stringify(response_likes));
};

// <------- Remove Likes ----------->
export const removeLikes = (id) => {
   const data_likes = localStorage.getItem("Likes");
   const response_likes = JSON.parse(data_likes);

   // Check if the id of the movie exists in the local storage array
   const indexOfQuery = response_likes.findIndex((movie) => id === movie.movieId);

   // Remove the index of the id from local storage
   // Check if the indexQuery exists (not -1)
   if (indexOfQuery > -1) {
      response_likes.splice(indexOfQuery, 1);
   }

   // Store to local storage
   localStorage.setItem("Likes", JSON.stringify(response_likes));
};
