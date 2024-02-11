import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

export const useUpComingMovies = () => {
    const dispatch = useDispatch();
    const upComingMovies = useSelector(store => store.movies.upcomingMovies);
   
   
    const getUpComingMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?&page=1",API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    }
   
    useEffect(() => {
           !upComingMovies && getUpComingMovies();
    } , []);

}




