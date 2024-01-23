import { BackGroundImage } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggstions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
    return (
        <div>
            <div className="absolute -z-10">
                <img
                    src={BackGroundImage} alt="logo"></img>
            </div>
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    );
}

export default GptSearch;