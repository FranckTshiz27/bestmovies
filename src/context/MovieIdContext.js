import React from "react";
import { useState, createContext } from "react";

export const MovieIdContext= createContext();
export const MovieProvider = (props) => {
  const [movieId, setMovieId] = useState();
  return (
    <MovieIdContext.Provider value={[movieId, setMovieId]}>
      {props.children}
    </MovieIdContext.Provider>
  );
};

