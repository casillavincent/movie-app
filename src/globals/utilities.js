//Floor given integer (vote count and popularity)
export const floorNumber = (int) => {
   return Math.floor(int);
};

//Change rating into percentage
export const percentNumber = (int) => {
   return `${Math.floor(int * 10)}%`;
};

//Change color of rating
export const ratingColor = (rating) => {
   let ratingSelector = document.querySelector(".thumbnail .rating-btn .rating");
   if (rating > 7) {
      return "#4CB396";
   } else if (rating < 7 && rating > 5.5) {
      return "#7995E6";
   } else {
      return "#FE3736";
   }
};
