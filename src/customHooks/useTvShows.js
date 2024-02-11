import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTvShows } from "../utils/movieSlice";
import { useEffect } from "react";


export const useTvShows = () => {
    const dispatch = useDispatch();
    const tvShows = useSelector(store => store.movies.tvShows);

    const getTvShows = async () => {
        const data = await fetch("https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc", API_OPTIONS);
        const json = await data.json();
        dispatch(addTvShows(json.results));
    }

    useEffect(() => {
        !tvShows && getTvShows();
    }, []);
}