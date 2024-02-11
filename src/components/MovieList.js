import MovieCard from "./MovieCard";

const MovieList = ({ title, movies ,id }) => {

    const sliderLeft = () => {
        var element = document.getElementById(`${id}`);
        element.scrollLeft -= 500;

    }
    const sliderRight = () => {
        var element = document.getElementById(`${id}`);
        element.scrollLeft += 500;

    }

    return movies != null && (
        <>  
            <span className="py-4 text-lg md:text-3xl text-white">{title}</span>
            <span className="text-[30px] text-white cursor-pointer  bg-red-800  mx-4 px-2" onClick={sliderLeft}>{"<"}</span>
            <span className="text-[30px] text-white cursor-pointer bg-red-800  mx-4 px-2 " onClick={sliderRight}>{">"}</span>
            

                    <div id={id} className="flex px-6 overflow-hidden scroll-smooth whitespace-nowrap my-10">
                        <div className="flex">
                        {movies.map(movie => (
                            <MovieCard key={movie.id} posterPath={movie.poster_path} />

                        ))}
                       </div>
                    </div>
        </>
    );
}

export default MovieList;