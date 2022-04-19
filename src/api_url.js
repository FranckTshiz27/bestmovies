export const moviesUrls = {
  all: "https://api.themoviedb.org/3/discover/movie?api_key=e7c1d389e3c2413fb608dc3de9fe7fcc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrat&page",
  popular:
    "https://api.themoviedb.org/3/movie/popular?api_key=e7c1d389e3c2413fb608dc3de9fe7fcc&language=en-US&page",

  comingUp:
    "https://api.themoviedb.org/3/movie/upcoming?api_key=e7c1d389e3c2413fb608dc3de9fe7fcc&language=en-US&page",
  genres:
    "https://api.themoviedb.org/3/genre/movie/list?api_key=e7c1d389e3c2413fb608dc3de9fe7fcc&language=en-US",

  moviesByGenre:
    "https://api.themoviedb.org/3/discover/movie?api_key=e7c1d389e3c2413fb608dc3de9fe7fcc&with_genres=",

  moviesSearchUrl:
    "https://api.themoviedb.org/3/search/movie?api_key=e7c1d389e3c2413fb608dc3de9fe7fcc&language=en-US&include_adult=false",
};

export const serialsUrls = {
  all: "https://api.themoviedb.org/3/discover/tv?api_key=e7c1d389e3c2413fb608dc3de9fe7fcc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrat&page",
  popular: `https://api.themoviedb.org/3/tv/popular?api_key=e7c1d389e3c2413fb608dc3de9fe7fcc&language=en-US&page`,
  comingUp: "",
  genres: `https://api.themoviedb.org/3/genre/tv/list?api_key=e7c1d389e3c2413fb608dc3de9fe7fcc&language=en-US`,
  serialsSearchUrl:
    "https://api.themoviedb.org/3/search/tv?api_key=e7c1d389e3c2413fb608dc3de9fe7fcc&language=en-US&include_adult=false",
};

export const trendingUrl = {
  all: "https://api.themoviedb.org/3/trending/all/day?api_key=e7c1d389e3c2413fb608dc3de9fe7fcc&page",
};
