
import defaultImage from '../images/black.jpg';
const Card= ({title,imageUrl,poster_path})=>{


    return (
  
     
          
        <div className="card">
            {/* <img src={poster_path? `${imgageUrl}${poster_path}`:img1}  alt={title}/> */}
            <img src={poster_path?`${imageUrl}${poster_path}`:defaultImage}  alt={title}/>
            <div className="descriptions">
                <h1>{title}</h1>
                <p>
                    If you have a problem and there is nowhere else to turn,            
                </p>
                <div  className="actions-conatiner">
                <button>
                <i class="fa fa-play" aria-hidden="true">  Play Now</i>
                 
                </button>

                <button>
                <i class="fa fa-play" aria-hidden="true"> More  Details</i>
                 
                </button>
                </div>
               
            </div>
        </div>



    )
}

export default Card;