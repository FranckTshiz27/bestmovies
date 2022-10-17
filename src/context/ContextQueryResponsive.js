import React from "react";
import { useState, createContext } from "react";

export const ContextQueryReponsive = createContext();
export const QueryProviderResponsive = (props) => {
  const [queryReponsive, setQueryReponsive] = useState();
  console.log(" rrrrrrrrrrrrrrrrrrrrrrrrrrr");

  return (
    <ContextQueryReponsive.Provider value={[queryReponsive, setQueryReponsive]}>
      {props.children}
    </ContextQueryReponsive.Provider>
  );
};
