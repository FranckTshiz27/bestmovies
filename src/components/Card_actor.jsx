 import { useHistory } from "react-router-dom";
import defaultImage from '../images/black.jpg';
import {CgDetailsMore} from "react-icons/cg";
import {AiFillYoutube} from "react-icons/ai";
import { MovieIdContext } from "../context/MovieIdContext";
import { useContext } from "react";
const CardActor= ({profile_path,title,name,country})=>{
    let history = useHistory();
    const [movieId,setMovieId]= useContext(MovieIdContext);
    const imageUrl_small = "http://image.tmdb.org/t/p/w300/";


    return (  
        <div className="cardProductCountry">
            <img src={profile_path?`${imageUrl_small}${profile_path}`:defaultImage}  alt={title}/>
            <div className="descriptions">
                <h1>{name}</h1>
               
                <h1>
                    {country}
                </h1>
               
            </div>
        </div>



    )
}

export default CardActor;