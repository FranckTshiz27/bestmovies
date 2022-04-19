import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "font-awesome/css/font-awesome.min.css";
<link rel="preconnect" href="https://fonts.gstatic.com"></link>;
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
  rel="stylesheet"
></link>;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
