import { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { moviesUrls } from '../../api_url';
import { useFetchData } from '../../hooks/fetchHooks';
import Card from '../Card';
import Pagination from '../../components/Pagination'
import SkeletonCard from '../SkeletonCard';

const ComingUp = ({ imageUrl }) => {

    const [isMovieSelected, selectMovies] = useState(true);
    const [isSerieSelected, selectSeries] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const { comingUp: comingUpMoviesUrl } = moviesUrls;
    const data = useFetchData(comingUpMoviesUrl, currentPage);
    let totalPages;
    let comingUpMovies = [];

    if (data) {
        comingUpMovies = data.results;
        totalPages = data.total_pages;
    }



    const handleClick = (Event) => {
        toggle(Event.target.name);
    }

    function toggle(buttonName) {
        switch (buttonName) {
            case "series":
                selectSeries(true);
                selectMovies(false);
                break;
            case "movies":
                selectMovies(true);
                selectSeries(false);
                break;
            default:
                break;
        }
    }


    const movieToggle = isMovieSelected ? <button className="selected" name="movies" onClick={handleClick}>Movies

    </button> : <button name="movies" className="unselected" onClick={handleClick}>Movies</button>

    const serieToggle = isSerieSelected ? <button name="series" className="selected" onClick={handleClick}>Series

    </button> : <button name="series" className="unselected" onClick={handleClick}>Series</button>



    const showData = () => {
        if (comingUpMovies) {

            const movies = comingUpMovies.map((movie, idx) => {
                return <div>
                    {<Card imageUrl={imageUrl}
                       id={movie.id}
                       overview={movie.overview}
                     poster_path={movie.backdrop_path} 
                    vote_average={movie.vote_average} title={movie.title}></Card>}
                    
                </div>
            }
            )

            if (movies.length==0) return showSkeletons();


            return movies;
        }
    }

    const showSkeletons = () => {
        let myMoviesSkeletons = []
          myMoviesSkeletons.push(<SkeletonCard />,<SkeletonCard />,<SkeletonCard />,<SkeletonCard />)
        return myMoviesSkeletons;
      }
    const show = () => {
        return <Carousel itemsToShow={3}>
            {
                showData()
            }
        </Carousel>


    }

    const handleNextPage = (Event) => {
        if (currentPage < 499) {
            setCurrentPage(currentPage + 1);

        }
    }


    const handlePreviewPage = (Event) => {
        if (currentPage >= 2) {
            setCurrentPage(currentPage - 1);

        }
    }

    return (

        <section className="comingUp">
            <h2 className="comingUp__title">
                UP COMING MOVIES
            </h2>

            <div className="comingUp__container">
                {show()}
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                getNexPage={handleNextPage}
                getPreviewPage={handlePreviewPage}
            >
            </Pagination>
        </section>
    )

}

export default ComingUp;