import React,{ useState ,useContext} from "react";
import { ContextQuery } from "../context/ContextQuery";
import Card from '../components/Card';
import SearchPageSkeleton from './SearchPageSkeleton';
import Pagination from '../components/Pagination';
import OptionsComponent from '../components/OptionsComponent';
import { useFetchDataSearch } from '../hooks/fetchHooks';
import { moviesUrls, serialsUrls } from "../api_url"
import SkeletonCard from "../components/SkeletonCard";

const SearchPage = ({ imageUrl }) => {

   const { moviesSearchUrl: moviesUrl } = moviesUrls;
   const { serialsSearchUrl: serialsUrl } = serialsUrls;
   const [currentPage, setCurrentPage] = useState(1);
   const [isMoviesSelected, selectMovies] = useState(true);
   const [isSeriesSelected, selectSeries] = useState(false);
   const [query, setQuery] = useContext(ContextQuery);
   const [url, setUrl] = useState(moviesUrl);
   let totalPages;
   let totalResults;
   let data = useFetchDataSearch(url, currentPage, query);
   let movies = []
   let myMovies = []

   if (data) {
      movies = data.results
      totalPages = data.total_pages ? data.total_pages : 0;
      totalResults = data.total_results ? data.total_results : 0;
   }

   const handlePreviewPage = (Event) => {
      Event.preventDefault()
      if (currentPage >= 2) {
         setCurrentPage(currentPage - 1);
      }
   }

   const handleNextPage = (Event) => {
      Event.preventDefault()
      if (currentPage <= 499) {
         setCurrentPage(currentPage + 1);
      }
   }

   const handleClick = (Event) => {
      toggle(Event.target.name);
   }

   const showMovies = () => {
      if (movies != null && movies.length > 0) {
         myMovies = movies.map((movie) => {
            return <Card 
            imageUrl={imageUrl} 
            id ={movie.id}
            vote_average={movie.vote_average}
            poster_path={movie.backdrop_path}
               title={movie.title}>
            </Card>
         })
      }
      if (myMovies.length===0||query===undefined) return showSkeletons();
      return myMovies;
   }


   function toggle(buttonName) {
      switch (buttonName) {
         case "series":
            selectSeries(true);
            selectMovies(false);
            setUrl(serialsUrl);
            setCurrentPage(currentPage);
            break;
         case "movies":
            selectMovies(true);
            selectSeries(false);
            setUrl(moviesUrl);
            setCurrentPage(currentPage);
            break;
         default:
            break;
      }
   }
   const showSkeletons = () => {
      let myMoviesSkeletons = []
        myMoviesSkeletons.push(<SkeletonCard />,<SkeletonCard />,<SkeletonCard />,<SkeletonCard />)
      return myMoviesSkeletons;
    }
   return (
      <>
         <div className="searchPage">
            <div className="searchPage__banner">
               <div className="categories__container">
                  <OptionsComponent
                     name="movies"
                     isCategorySelected={isMoviesSelected}
                     handleClick={handleClick}>
                     Movies
                  </OptionsComponent>
                  <OptionsComponent isCategorySelected={isSeriesSelected}
                     name="series" handleClick={handleClick}>
                     Series
                  </OptionsComponent>
               </div>
               <div className="searchPage__banner__results-description">
                  {`${totalResults} results found for `}
                  {`${totalPages} pages`}
               </div>
            </div>
            <section className="">
         <div className="movies__container">
            {showMovies()}
         </div>
         <Pagination totalPages={totalPages}
            currentPage={currentPage}
            getNexPage={handleNextPage}
            getPreviewPage={handlePreviewPage}
         >
         </Pagination>
      </section>
         </div>
      </>
   )
}
export default SearchPage;