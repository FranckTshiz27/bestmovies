import React from 'react';
import { IoIosFilm} from "react-icons/io";


function Logo()
{
    const style ={fontSize:"30px"}
    return <h1 className="logo">
           <IoIosFilm style={style}/>  HAPPY <em>STREAM</em>
    </h1>

}

export default Logo;