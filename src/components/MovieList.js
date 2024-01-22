import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  
    return movies!=null && (
        <div className="px-6 ">
             <h1 className="py-4 text-3xl text-white">{title}</h1>
            <div className="flex overflow-x-scroll ">
            <div className="flex">
                {movies.map(movie => (
                    <MovieCard posterPath={movie.poster_path} />

                ))}

            </div>
            </div>
        </div>
    );
}

export default MovieList;