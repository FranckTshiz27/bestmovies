import logo from "./logo.svg";
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
import ModalPAge from "./pages/ModalPage";
import ModalPage from "./pages/ModalPage";
function App() {
  const imageUrl = "http://image.tmdb.org/t/p/w500/";

  return (
    <div className="App">
      <Router>
        <QueryProvider>
          <MovieProvider>
          <MovieUrlProvider>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              component={() => <Home imageUrl={imageUrl} />}
            />
            <Route
              path="/movies"
              component={() => <Movie imageUrl={imageUrl} />}
            />

            <Route
              path="/tvShows"
              component={() => <SerialPage imageUrl={imageUrl} />}
            />
            <Route
              path="/search"
              component={() => <SearchPage imageUrl={imageUrl} />}
            />

            <Route
              path="/detail"
              component={() => <UseDetailPage imageUrl={imageUrl} />}
            />
            <Route
              path="/play"
              component={() => <ModalPage imageUrl={imageUrl} />}
            />
          </Switch>
          </MovieUrlProvider>
          </MovieProvider>
        </QueryProvider>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
