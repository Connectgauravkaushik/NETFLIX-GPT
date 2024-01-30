import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  
    return movies!=null && (
        <div className="px-6 ">
             <h1 className="py-4 text-lg md:text-3xl text-white">{title}</h1>
            <div className="flex overflow-hidden ">
            <div className="flex">
                {movies.map(movie => (
                    <MovieCard key={movie.id}  posterPath={movie.poster_path} />

                ))}

            </div>
            </div>
        </div>
    );
}

export default MovieList;