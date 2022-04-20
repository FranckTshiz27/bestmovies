import { useHistory } from "react-router-dom";
import defaultImage from '../images/black.jpg';
import { CgDetailsMore } from "react-icons/cg";
import { AiFillYoutube } from "react-icons/ai";
import { MovieIdContext } from "../context/MovieIdContext";
import { useContext } from "react";
import { useState } from "react";
import { MovieUrlContext, MovieUrlProvider } from "../context/MovieUrlContext";

const SkeletonCard= () => {
    return (
        <>
            <div class="skeleton_card loading">
                <div class="image">
                </div>
                <div class="content">
                    <h4></h4>
                    <div class="description">
                    </div>
                </div>
            </div>
        </>
    )
}

export default SkeletonCard;