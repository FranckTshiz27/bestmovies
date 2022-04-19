import React from "react";
import { useState, createContext } from "react";

export const MovieUrlContext= createContext();
export const MovieUrlProvider = (props) => {
  const [movieUrl, setMovieUrl] = useState();
  return (
    <MovieUrlContext.Provider value={[movieUrl, setMovieUrl]}>
      {props.children}
    </MovieUrlContext.Provider>
  );
};

