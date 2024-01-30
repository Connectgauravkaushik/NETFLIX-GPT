import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackGround from "./VideoBackGround";

const MainContainer = () => {
    const movies = useSelector(store =>  store.movies?.NowPlayingMovies);
    
    if(movies === null) return;  // if movie is not present  then return null
    const mainMovie = movies[0];  // only considering the first movie

   const {original_title ,overview,id } = mainMovie;
    return ( 
        <div className="pt-[30%] md:pt-0 bg-black">
           <VideoTitle title={original_title} overview={overview}/>
           <VideoBackGround movieId={id}/>
        </div>
     );
}
 
export default MainContainer;