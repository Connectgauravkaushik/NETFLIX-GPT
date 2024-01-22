import { IMG_CDN_URl } from "../utils/constants";
const MovieCard = ({posterPath}) => {
    return ( 
        <div className="w-48 mx-2 ">
            <img  
            src={IMG_CDN_URl + posterPath}
            alt="Movie Card"/>
        </div>
     );
}
 
export default MovieCard;