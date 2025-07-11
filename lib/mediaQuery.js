export const mediaQuery = (mediaQuery, callback) => {
  var mql = window.matchMedia(mediaQuery);
  mql.addEventListener('change', (e) => callback(e.matches));
  callback(mql.matches);
}
