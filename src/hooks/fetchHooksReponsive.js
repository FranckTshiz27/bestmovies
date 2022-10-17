import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { ContextQueryReponsive } from "../context/ContextQueryResponsive";

export const useFetchData = (url, currentPage, genre) => {
  const [data, setData] = useState();
  const getMovies = async () => {
    const newUrl = getUrl(genre, url, currentPage);
    const response = await fetch(newUrl);
    const data = await response.json();
    setData(data);
  };

  const getUrl = (genre, url, currentPage) => {
    let myUrl = "";
    if (
      genre &&
      genre.name !== "All the movies" &&
      genre.name !== "All the serials"
    ) {
      myUrl = `${url}=${currentPage}&with_genres=${genre.id}`;
    } else {
      myUrl = `${url}=${currentPage}`;
    }

    return myUrl;
  };

  useEffect(() => {
    getMovies();
  }, [currentPage, url, genre]);

  return data;
};

export const useFetchDataSearch = (url, currentPage, query) => {
  const [data, setData] = useState();

  const getMovies = async () => {
    const newUrl = getUrl(url, query, currentPage);
    const response = await fetch(newUrl);
    const data = await response.json();
    setData(data);
  };

  const getUrl = (url, query, currentPage) => {
    return `${url}&page=${currentPage}&query=${query}`;
  };

  useEffect(() => {
    getMovies();
  }, [currentPage, url, query]);

  return data;
};

export const useFetchOnePageData = (url) => {
  const [data, setData] = useState();

  const getData = async () => {
    const response = await fetch(url);
    const myData = await response.json();

    setData(myData);
  };

  useEffect(() => {
    getData();
  }, [url]);

  return data;
};

export const useFetchDataByGender = (url, currentPage, gender) => {
  const [data, setData] = useState();

  const getData = async () => {
    const response = await fetch(`${url}${gender.id}&page=${currentPage}`);
  };

  useEffect(() => {}, [url, gender]);
};

export const useInputFilterLightResponsive= (isSearching, isStart) => {

  const [searchBarStyle, setSearchBarStyle] = useState("null");
 
  const [search, setSearch] = useContext(ContextQueryReponsive);
 
  const handleChange = (e) => {
    let filter = e.target.value;
    console.log(" ghhhhhhhhhhhhhhhhhhhhhhh ghgggggggggggggggggggggggggggggg ",filter);
    setSearch(filter);
  };
 
  const history = useHistory();
  
  const toggle = () => {
    if (isSearching) {
      setSearchBarStyle("ipFilter_responsive-ligth-open");
    } else {
      setSearchBarStyle("ipFilter_responsive-ligth-close");
    }
  };

  useEffect(() => {
    toggle();
   
    return history.listen((location) => {
      if (location.pathname !== "/search") {
        setSearchBarStyle("ipFilter_responsive-ligth-close");
      }
    });
  }, [history, isSearching]);

  const linkToSearchPage = () => {
    history.push("/search");
  };

  const showInput = () => {
    return isStart ? (
      <div className={searchBarStyle}>
        <input
          className="ipFilter_responsive__input"
          type="search"
          onChange={handleChange}
          onClick={linkToSearchPage}
        />
      </div>
    ) : (
      <div></div>
    );
  };
 
  return <>{showInput()}</>;
};
