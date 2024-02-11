import Header from "./Header";
import { useNowPlayingMovies } from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { usePopularMovies } from "../customHooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import { useUpComingMovies } from "../customHooks/useUpComingMovies";
import { useTopRatedMovies } from "../customHooks/useTopRatedMovies";
import { useTrendingMovies } from "../customHooks/useTrendingMovies";
import { useTvShows } from "../customHooks/useTvShows";

const Browse = () => {
     const showGptSearch = useSelector(store => store.gpt.showGptSearch);

     useNowPlayingMovies();
     usePopularMovies();
     useUpComingMovies();
     useTopRatedMovies();
     useTrendingMovies();
     useTvShows();
     return (
          <div className="overflow-x-hidden">
               <Header />
               {showGptSearch ? (<GptSearch />) :
                    (
                         <>
                              <MainContainer />
                              <SecondaryContainer />
                         </>
                    )}


          </div>
     );
}

export default Browse;