import logo from "./logo.svg";
import React,{ useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import "./styles/css/style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./pages/Footer";
import Movie from "./pages/Movie";
import SerialPage from "./pages/SerialPage";
import Home from "./components/home/Home";
import SearchPage from "./pages/SearchPage";
import UseDetailPage from "./pages/DetailPage";
import { QueryProvider } from "./context/ContextQuery";
import { MovieProvider } from "./context/MovieIdContext";
import { MovieUrlProvider } from "./context/MovieUrlContext";
import { QueryProviderResponsive } from "./context/ContextQueryResponsive";
import ModalPage from "./pages/ModalPage";
function App() {
  const imageUrl = "http://image.tmdb.org/t/p/w500/";

  return (
    <div className="App">
      <Router>
        <QueryProvider>
          <MovieProvider>
          <QueryProviderResponsive>
            <MovieUrlProvider>
              <Header />
              <Switch>
                <Route
                 exact
                  path="/"
                  component={() => <Home imageUrl={imageUrl} />}
                />
                <Route
                  path="/movies"
                  component={() => <Movie imageUrl={imageUrl} />}
                />

                <Route
                  exact
                  path="/tvShows"
                  component={() => <SerialPage imageUrl={imageUrl} />}
                />
                <Route
                  exact
                  path="/search"
                  component={() => <SearchPage imageUrl={imageUrl} />}
                />

                <Route
                  exact
                  path="/detail"
                  component={() => <UseDetailPage imageUrl={imageUrl} />}
                />
                <Route
                  exact
                  path="/play"
                  component={() => <ModalPage imageUrl={imageUrl} />}
                />
              </Switch>
            </MovieUrlProvider>
            </QueryProviderResponsive>
          </MovieProvider>
        </QueryProvider>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
