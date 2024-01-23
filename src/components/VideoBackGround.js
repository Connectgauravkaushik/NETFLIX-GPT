
import { useSelector } from "react-redux";
import useMovieTrailer from "../customHooks/useMovieTrailer";
const VideoBackGround = ({ movieId }) => {
    const moviesTrailer = useSelector(store => store.movies?.trailerVideo);
    console.log(movieId);
    useMovieTrailer(movieId);

    return (
        <div>
            <iframe
            className="w-screen aspect-video "
                src={"https://www.youtube.com/embed/" + moviesTrailer?.key + "?&autoplay=1&mute=1"}
                
                title="YouTube video player"
               
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            >
            </iframe>
        </div>
    );
}

export default VideoBackGround;