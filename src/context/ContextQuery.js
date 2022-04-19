import React from "react";
import { useState, createContext } from "react";

export const ContextQuery = createContext();
export const QueryProvider = (props) => {
  const [query, setQuery] = useState();

  return (
    <ContextQuery.Provider value={[query, setQuery]}>
      {props.children}
    </ContextQuery.Provider>
  );
};
