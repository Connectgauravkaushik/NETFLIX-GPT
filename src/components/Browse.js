import Header from "./Header";
import { useNowPlayingMovies } from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { usePopularMovies } from "../customHooks/usePopularMovies";
import GptSearch from "./GptSearch";

const Browse = () => {
     useNowPlayingMovies();
     usePopularMovies();
     return (
          <div className="overflow-x-hidden">
               <Header />
               <GptSearch/>
               <MainContainer/>
               <SecondaryContainer/>
          </div>
     );
}

export default Browse;