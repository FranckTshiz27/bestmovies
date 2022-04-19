
import Logo from '../header/Logo';
import {trendingUrl} from '../../api_url';
import {useFetchData}  from '../../hooks/fetchHooks'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import {TrendingMovieContainer} from '../styled/TrendingMovieContainer';
import { SeeMoreButtonStyled } from '../styled/SeeMoreButtonStyled';
import  {VscFoldDown} from "react-icons/vsc";

const Banner =()=>{
    const imageUrl = "https://image.tmdb.org/t/p/original";
    const {all:url} = trendingUrl;
    let trending_movies=useFetchData(url,1)

    if (trending_movies) {
       
       trending_movies=trending_movies.results;
    }

   
    const showMovies = () => {
        let myMovies = []
        if (trending_movies!= null && trending_movies.length > 0) {
          myMovies = trending_movies.map((movie) => {
       return  <TrendingMovieContainer className="section-padding each-slide" bg={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}>
              <h1 className="movie-title">{movie.title}</h1>

              {
                movie.release_date? <div className="date_released">{movie.release_date}</div>:<div></div>
              }
                
           <h2 className="movie-description">{movie.overview}</h2>
           <SeeMoreButtonStyled>MORE DETAILS</SeeMoreButtonStyled>
      </TrendingMovieContainer>
          })
    
        }
    
    
        return myMovies;
      }

    return(
            <div className="banner-background">   
            <div className="banner__card-container">
            
                       <Slide  easing="ease" arrows={false} autoplay={true} pauseOnHover={false} duration={10000}>
                    
                       {showMovies()}
                   </Slide>
                  
                   <VscFoldDown
                   className='moveUpDown'
                />
             </div>   
                     
            </div>

    );

    
}

export default Banner;