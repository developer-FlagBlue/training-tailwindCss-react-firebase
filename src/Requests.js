const key = "46b854d3e9672ba2c53a33de56bee7e9";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=fr&page=1`,
  requestTop_rated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=fr&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/trending?api_key=${key}&language=fr&page=1`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=fr&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=fr&page=1`,
};

export default requests;
