export const shortenPars = (string) => {
   let untrimmed = string;
   const trimLength = 55;
   return `${untrimmed.substring(0, trimLength)} ...`;
};
