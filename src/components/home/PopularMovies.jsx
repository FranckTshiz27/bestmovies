
import { useState } from 'react'
import { moviesUrls, serialsUrls } from '../../api_url';
import { useFetchData } from '../../hooks/fetchHooks';
import Card from '../Card';
import Pagination from '../Pagination';
import OptionsComponent from '../../components/OptionsComponent';


const PopularMovies = ({ imageUrl }) => {
    const [isMoviesSelected, selectMovies] = useState(true);
    const [isSeriesSelected, selectSeries] = useState(false);
    const [moviesCurrentPage, setMoviesCurrentPage] = useState(1);
    const [seriesCurrentPage, setSeriesCurrentPage] = useState(1);
    const { popular: popularMoviesUrl } = moviesUrls;
    const { popular: popularSeriesUrl } = serialsUrls;
    let [currentPage, setCurrentPage] = useState(1);
    let [url, setUrl] = useState(popularMoviesUrl);
    let popularMovies = [];
    let totalPages;
    const data = useFetchData(url, currentPage);


    if (data)
        popularMovies = data.results;

    const handleClick = (Event) => {
        toggle(Event.target.name);
    }
    const handleNextPage = (Event) => {
        changePage("+");
    }
    const handlePreviewPage = (Event) => {
        changePage("-")
    }

    const changePage = (description) => {

        switch (description.trim()) {
            case "+":
                if (isMoviesSelected) {
                    setCurrentPage(moviesCurrentPage);
                    setCurrentPage(currentPage + 1);
                    setMoviesCurrentPage(currentPage)
                }
                else {

                    setCurrentPage(seriesCurrentPage);
                    setCurrentPage(currentPage + 1);
                    setSeriesCurrentPage(currentPage);
                }
                break
            case "-":
                if (isMoviesSelected && currentPage >= 2) {
                    setCurrentPage(moviesCurrentPage);
                    setCurrentPage(currentPage - 1);
                    setMoviesCurrentPage(currentPage);
                }
                else {
                    if (currentPage >= 2) {
                        setCurrentPage(seriesCurrentPage);
                        setCurrentPage(currentPage - 1);
                        setSeriesCurrentPage(currentPage);
                    }
                }
                break
            default:
                break
        }
    }

    const showMovies = () => {
        let movies = null;
        if (popularMovies != null) {
            movies = popularMovies.map((movie) => {
                return <Card
                id={movie.id}
                    imageUrl={imageUrl}
                    poster_path={movie.backdrop_path}
                    title={movie.title}>
                </Card>
            })
        }
        return movies;
    }

    function toggle(buttonName) {
        switch (buttonName) {
            case "series":
                selectSeries(true);
                selectMovies(false);
                setUrl(popularSeriesUrl);
                setCurrentPage(seriesCurrentPage);
                break;
            case "movies":
                selectMovies(true);
                selectSeries(false);
                setUrl(popularMoviesUrl);
                setCurrentPage(moviesCurrentPage);
                break;
            default:
                break;
        }
    }

    return (

        <section className="mostPopular">
            <h2 className="popularMovies__title">THE MOST POPULAR </h2>
            <div className="mostPopular__categoriesContainer">
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
            </div >
            <div className="lstContainer">
                {
                    showMovies()
                }
            </div>
            <Pagination currentPage={currentPage}
                getPreviewPage={handlePreviewPage}
                getNexPage={handleNextPage}
                totalPages={totalPages}>
            </Pagination>
        </section >
    )


}

export default PopularMovies;