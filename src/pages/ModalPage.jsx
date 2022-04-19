import { MovieUrlContext, MovieUrlProvider } from "../context/MovieUrlContext";
import { useContext } from "react";

const ModalPage=()=>{
    const [movieUrl,setMovieUrl]= useContext(MovieUrlContext);

    console.log(" uriiirrrrrrrrrrrrrrrrrrr  5555  "+"https://www.youtube.com/embed/"+movieUrl);

    return(
        <MovieUrlProvider>
        <div className="detail">
              
              <iframe width="853" height="480" 
              src={movieUrl!==null?`https://www.youtube.com/embed/${movieUrl}`:"https://www.youtube.com/embed/"}
              title="The Movie" frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; 
              encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen></iframe>
        </div>
        </MovieUrlProvider>
    )
}

export default ModalPage;