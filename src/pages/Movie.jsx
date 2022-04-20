
import { useState } from 'react/cjs/react.development';
import { moviesUrls } from '../api_url';
import { useFetchData, useFetchDataByGender, useFetchOnePageData } from '../hooks/fetchHooks';
import { useHistory } from 'react-router-dom';
import Card from '../components/Card';
import Pagination from '../components/Pagination'
import SkeletonCard from '../components/SkeletonCard';
const Movie = ({ imageUrl }) => {


  const defaultCategory = { id: 200, name: "All the movies" };
  const [selectedCategory, setSelectedCategory] = useState({ id: 200, name: "All the movies" });
  const [currentPage, setcurrentPage] = useState(1);
  const [myFilter, setMyFilter] = useState("");
  let totalPages = 0;
  const { all: allMoviesUrl, genres: genresUrl, moviesByGenre: moviesByGenreUrl } = moviesUrls;
  let data = useFetchData(allMoviesUrl, currentPage, selectedCategory);
  let myMovies = [];

  const history = useHistory();
  let genders = useFetchOnePageData(genresUrl);
  let movies = [];

  if (data) {
    movies = data.results;
    totalPages = data.total_pages;
  }

  if (genders)
    genders = genders.genres;

  const handlePreviewPage = (Event) => {

    Event.preventDefault()
    if (currentPage >= 2) {
      setcurrentPage(currentPage - 1);

    }


  }
  const handleNextPage = (Event) => {
    Event.preventDefault()
    if (currentPage <= 499) {
      setcurrentPage(currentPage + 1);

    }
  }

  const handleClick_selectCategory = (genre, e) => {
    setSelectedCategory(genre);
    showGenres();
    setcurrentPage(1);
  }



  const showGenres = () => {

    let myGenres = [];
    if (genders != null && genders.length > 0) {
      myGenres = genders.map((genre) => {
        return <button onClick={(e) => handleClick_selectCategory(genre, e)} className={selectedCategory.name === genre.name ? "active_category" : ""}>{genre.name}</button>
      })

    }

    myGenres.push(<button onClick={() => handleClick_selectCategory(defaultCategory)} >{defaultCategory.name}</button>);
    return myGenres;
  }

  const showMovies = () => {
    if (movies != null && movies.length > 0) {
      myMovies = movies.map((movie) => {
        return <Card imageUrl={imageUrl}
          id={movie.id}
          poster_path={movie.backdrop_path}
          title={movie.original_title}
          vote_average={movie.vote_average}></Card>
      })

    }

if (myMovies.length==0) 
    return showSkeletons();

    return myMovies;
  }


  const showSkeletons = () => {
    let myMoviesSkeletons = []
      myMoviesSkeletons.push(<SkeletonCard />,<SkeletonCard />,<SkeletonCard />,<SkeletonCard />)
    return myMoviesSkeletons;
  }
  return (

    <div className="movie">

      <div className="movie__banner">
        <div className="categories__container">
          {showGenres()}
        </div>
      </div>

      <div className="movies__container">
        {
          showMovies()
        }
        <Pagination currentPage={currentPage}
          getNexPage={handleNextPage}
          getPreviewPage={handlePreviewPage}
          totalPages={totalPages}>
        </Pagination>

      </div>

    </div>

  )
}

export default Movie;