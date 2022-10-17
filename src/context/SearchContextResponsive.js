import React from "react";
import { useState, createContext } from "react";

export const searchContextResponsive = createContext();

export const SearchProviderResponsive = (props) => {
  const [isSearchingResponsive, setIsSearchingResponsive] = useState();

  return (
    <searchContextResponsive.Provider value={[isSearchingResponsive, setIsSearchingResponsive]}>
      {props.children}
    </searchContextResponsive.Provider>
  );
};
