import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();
    
    // Doing Memoization
   const trailerVideo = useSelector(store => store.movies.trailerVideo);

    const getMoviesVideo = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos", API_OPTIONS);
        const json = await data.json();

        const FilterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = FilterData.length ? FilterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));

    }

    useEffect(() => {
        !trailerVideo && getMoviesVideo();

    }, []);

}

export default useMovieTrailer;