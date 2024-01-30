import { BackGroundImage } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggstions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
    return (
        <>
            <div className="fixed  -z-10">
                <img
                    className="h-screen object-cover md:h-auto"
                    src={BackGroundImage} alt="logo"></img>
            </div>
            <div className="">

                <GptSearchBar />
                <GptMovieSuggestions />
            </div>
        </>

    );
}

export default GptSearch;







