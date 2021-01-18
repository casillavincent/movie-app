//! Change date from yyyy-mm-dd to Month Day Years
export function formatDate(string) {
   let options = { year: "numeric", month: "long", day: "numeric" };
   return new Date(string).toLocaleDateString([], options);
}
