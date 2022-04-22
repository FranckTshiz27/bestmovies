import React,{ useState ,useContext} from "react";
import { useHistory } from "react-router-dom";
import defaultImage from '../images/black.jpg';
import { MovieIdContext } from "../context/MovieIdContext";
const CardProductCountry= ({logo_path,title,name,country})=>{
    let history = useHistory();
    const [movieId,setMovieId]= useContext(MovieIdContext);
    const imageUrl_small = "http://image.tmdb.org/t/p/w300/";


    return (  
        <div className="cardProductCountry">
            <img src={logo_path?`${imageUrl_small}${logo_path}`:defaultImage}  alt={title}/>
            <div className="descriptions">
                <h1>{name}</h1>
               
                <h1>
                    {country}
                </h1>
               
            </div>
        </div>



    )
}

export default CardProductCountry;