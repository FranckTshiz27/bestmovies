 import { useHistory } from "react-router-dom";
import defaultImage from '../images/black.jpg';
import {CgDetailsMore} from "react-icons/cg";
import {AiFillYoutube} from "react-icons/ai";
import { MovieIdContext } from "../context/MovieIdContext";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MovieUrlContext, MovieUrlProvider } from "../context/MovieUrlContext";

const Card= ({title,imageUrl,poster_path,vote_average,id})=>{
    let history = useHistory();
    const [movieId,setMovieId]= useContext(MovieIdContext);
    const [pid,setPid]=useState(movieId);
    const trailerUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en`;
    const [movieUrl,setMovieUrl]= useContext(MovieUrlContext);

    console.log(" movie from card  ",movieUrl," id  ",id);
 const handleClick =()=>{
    history.push("/detail");
    setMovieId(id)
 }

 const playMovie=()=>{
     history.push("/play")
     console.log(" l'url du film ");
     setMovieId(id)
     setMovieUrl(movieUrl); 
 }
 useEffect(()=>{
    const fetchData = async () => {
        const movieTrailData = await fetch(trailerUrl);
        const movieTrailResponse = await movieTrailData.json();
        if (movieTrailResponse.results[0]!==undefined) {
            setMovieUrl(movieTrailResponse.results[0].key);
        }
       }
  fetchData()
 })
    return (  
        <MovieUrlProvider>
        <div className="card">
            <img src={poster_path?`${imageUrl}${poster_path}`:defaultImage}  alt={title}/>
            <div className="descriptions">
                <h1>{title}</h1>
                <p>
                   {vote_average}            
                </p>
                <div  className="actions-container">
                <button onClick={playMovie}>
                    <AiFillYoutube className='icon' />  Play Now
                </button>
                <button onClick={handleClick}>
                <CgDetailsMore className='icon'/> More  Details
                </button>
                </div>
               
            </div>
        </div>
</MovieUrlProvider>


    )
}

export default Card;