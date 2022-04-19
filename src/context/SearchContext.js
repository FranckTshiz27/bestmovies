import React from "react";
import { useState, createContext } from "react";

export const searchContext = createContext();

export const SearchProvider = (props) => {
  const [isSearching, setIsSearching] = useState();

  return (
    <searchContext.Provider value={[isSearching, setIsSearching]}>
      {props.children}
    </searchContext.Provider>
  );
};
