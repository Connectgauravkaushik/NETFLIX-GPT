import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
     const movies = useSelector(store => store.movies);
    return movies.NowPlayingMovies && (
        <div className=" bg-black">
            <div className="-mt-32 md:-mt-56 pt-12 relative z-20 pl-4 md:pl-12">
            <MovieList title={"Now Playing"} movies={movies.NowPlayingMovies} id="NowPlaying" />
            <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} id="TopRated"  />
            <MovieList title={"Tv shows"} movies={movies.tvShows} id="TvShows"  />
            <MovieList title={"Trending Movies"} movies={movies.trendingMovies} id="TrendingMovies"  />
            <MovieList title={"Upcoming Movies"} movies={movies.NowPlayingMovies}  id="upcomingMovies" />
            </div>
        </div>
    );
}

export default SecondaryContainer;