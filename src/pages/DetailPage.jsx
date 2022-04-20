import { useEffect,useState } from "react";
import { Router } from "react-router-dom";
import { MovieProvider } from "../context/MovieIdContext";
import { useContext } from "react";
import { MovieIdContext } from "../context/MovieIdContext";
import defaultImage from '../images/black.jpg';
import {AiFillYoutube} from "react-icons/ai";
import CardProductCountry from "../components/Card_product_contry";
import CardActor from "../components/Card_actor";
import { useHistory } from "react-router-dom";
import { MovieUrlContext } from "../context/MovieUrlContext";


const UseDetailPage =()=>{

    const [movieId,setMovieId]= useContext(MovieIdContext);
    const history = useHistory();
    const [id,setId]=useState(movieId);
    const imageUrl = "http://image.tmdb.org/t/p/w500/";
    const imageUrl_small = "http://image.tmdb.org/t/p/w300/";
    const trailerUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en`;
    const movieDetailUrl =`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en`
    const movieActorsUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en`;
    const [movieDetailState,setMovieDetailState] = useState();
    const [companies,setCompanies] = useState();
    const [actors,setActors] = useState();
    const [movieUrl,setMovieUrl]= useContext(MovieUrlContext);

useEffect(()=>{
    const fetchData = async () => {
       const data = await fetch(movieDetailUrl);
       const response = await data.json()
        setMovieDetailState(response);
        setCompanies(response.production_companies);
        const actorsData = await fetch(movieActorsUrl);
        const actorsDataResponse = await actorsData.json()
        setActors(actorsDataResponse.cast);
        setCompanies(response.production_companies);
        const movieTrailData = await fetch(trailerUrl);
        const movieTrailResponse = await movieTrailData.json();
        if (movieTrailResponse.results[0]!==undefined) {
            setMovieUrl(movieTrailResponse.results[0].key);
        }
      }
     fetchData();
},[])
   
    const showBackground=()=>{
       return movieDetailState&&<img src={movieDetailState.poster_path?`${imageUrl}/${movieDetailState.poster_path}`:defaultImage} className="detail_img" alt="" />
    }

    const showMovieImg=()=>{
        return movieDetailState&&<img src={movieDetailState.poster_path?`${imageUrl_small}/${movieDetailState.poster_path}`:defaultImage}  alt="" />
     }

     const showCompanies = ()=>{
         let myCompanies = [];
         if (companies!=null) {
            myCompanies= companies.map(company=>{
            return <CardProductCountry name={company.name} country={company.country} logo_path={company.logo_path}></CardProductCountry>
            })
         }
         let newCompanies =[];
         for (let index = 0; index < 6; index++) {
            
            if (newCompanies[index]!==null) {
                newCompanies.push(myCompanies[index]);
            }else{
                break;
            }
         }
       
        return newCompanies;
     }

     const showActors = ()=>{
        let myActors = [];
        if (actors!==undefined) {
           myActors= actors.map(actor=>{
               return <CardActor name={actor.original_name} profile_path={actor.profile_path}></CardActor>
           })
        }
        let newActors =[];
       for (let index = 0; index < 10; index++) {
          if (newActors[index]!==null) {
              newActors.push(myActors[index]);
          }else{
              break;
          }
       }
       return newActors;
    }
    const play =()=>{
        history.push("/play")
        setMovieUrl(movieUrl);
    }

return(
<MovieProvider>
<main className="detail">
 {showBackground()}
 <div className="detail__container">

     <section className="detail__container__first">
         <div className="image__container">
         {showMovieImg()}
         <div className="detail__container__first__description__action__container">
         <AiFillYoutube className="play" onClick={play}/>
         </div>
         </div>
     
        <div className="detail__container__first__description">
            <div className="detail__container__first__description__text">
                <h1>
                {movieDetailState&&movieDetailState.original_title}
                </h1>
                <h2>
                {movieDetailState&&movieDetailState.overview}
                </h2>
            </div>
            <div  className="detail__container__first__description__productions">
             <h3>
                 Production countries
             </h3>
             <div className="productions_container">
                {showCompanies()}
             </div>
            </div>
       
        </div>
     </section>

     <section className="detail__container__second">
    <h1>
        Actors
    </h1>
    <div className="actors_container">
        {showActors()}
    </div>
     </section>
 </div>

</main>
</MovieProvider>  
)

}
export default UseDetailPage;