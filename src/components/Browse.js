import Header from "./Header";
import { useNowPlayingMovies } from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { usePopularMovies } from "../customHooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
     const showGptSearch = useSelector(store => store.gpt.showGptSearch);

     useNowPlayingMovies();
     usePopularMovies();
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