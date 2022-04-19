
import { useEffect, useState } from 'react/cjs/react.development';
import InputFilter from '../components/InputFilter';
import Card from '../components/Card';
import { moviesUrls, serialsUrls } from '../api_url';
import { useFetchData, useFetchDataByGender, useFetchOnePageData } from '../hooks/fetchHooks';
import { useHistory } from 'react-router-dom';
import Pagination from '../components/Pagination';

const SerialPage = ({ imageUrl }) => {


  const defaultCategory = { id: 200, name: "All the serials" };
  const [selectedCategory, setSelectedCategory] = useState({ id: 200, name: "All the serials" });
  const [currentPage, setcurrentPage] = useState(1);
  const { all: allMoviesUrl, moviesByGenre: moviesByGenreUrl } = moviesUrls;
  const { all: allSerialsUrl, genres } = serialsUrls;
  let data = useFetchData(allSerialsUrl, currentPage, selectedCategory);
  let totalPages;

  const history = useHistory();

  const handleChangeSearch = () => {

    history.push("/search")
  }

  let genders = useFetchOnePageData(genres);



  let movies = [];

  if (data) {
    movies = data.results;
    totalPages = data.total_pages;
  }

  if (genders)
    genders = genders.genres;


  const handleChange = (inputValue) => {

    history.push("/search")
  }



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
  }
  const showGenres = () => {

    let myGenres = [];

    if (genders != null && genders.length > 0) {
      myGenres = genders.map((genre) => {
        return <button onClick={(e) => handleClick_selectCategory(genre, e)} className={selectedCategory.name===genre.name?"active_category":""}>{genre.name}</button>
      })

    }

    myGenres.push(<button onClick={() => handleClick_selectCategory(defaultCategory)} >{defaultCategory.name}</button>);
    return myGenres;
  }

  const showMovies = () => {

    let myMovies = []

    if (movies != null && movies.length > 0) {
      myMovies = movies.map((movie) => {
        return <Card 
        id={movie.id}
        imageUrl={imageUrl}
         poster_path={movie.backdrop_path} 
        vote_average={movie.vote_average} 
        title={movie.original_name}></Card>
      })

    }


    return myMovies;
  }


  const filterData = (query) => {
    let filterMovies = [];
    if (query)
      if (movies != null && movies.length > 0) {

        filterMovies = movies.map((movie) => {

          return (movie.title.indexOf(query) !== -1)

        })

      }

    data = filterMovies;

  }

  const handleClick = (e) => {

  }

  return (

    <div className="serial">
      <div className="serial__banner--backGround">
        <div className="serial__banner">
          <div className="categories__container">
            {showGenres()}
          </div>
        </div>
      </div>

      <div className="serial__container">
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

export default SerialPage;