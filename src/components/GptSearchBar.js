import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openAI";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);
    const SearchTxt = useRef(null);
    const dispatch = useDispatch();

    //search movie in tmdb database
    const searchMovieTMDB = async (movie) => {
        const data = await fetch
            ("https://api.themoviedb.org/3/search/movie?query="
                + movie + "&include_adult=false&language=en-US&page=1",
                API_OPTIONS);
        const json = await data.json();
        return json.results;

    }


    const handleGPTSearchClick = async () => {
        
        //Writing a query 
        const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query"
            + SearchTxt.current.value + "only give me names of 5 movies comma seperated like the example result given ahead. Example Result:Gadar,sholey,Don,Batman , Golmaal,koi mil gya,salaar";

        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });

        // write error for this prompt 

        console.log(gptResults.choices?.[0]?.message?.content);
        const gptMovie = gptResults.choices?.[0]?.message?.content.split(","); // splitting the comma seprated movie in the form of array
        console.log(gptMovie);

        // For each movie I will search
        const promiseArray = gptMovie.map(movie => searchMovieTMDB(movie));

        const tmdbResults = await Promise.all(promiseArray);
        console.log(tmdbResults);
        dispatch(addGptMovieResult({movieNames:gptMovie,movieResults:tmdbResults}));

    }

    return (
        <div className=" pt-[35%] md:pt-[10%] flex justify-center" >
            <form className="w-full md:w-1/2 bg-black grid grid-cols-12 "
                onSubmit={(e) => e.preventDefault()}>

                <input type="text"
                    ref={SearchTxt}
                    placeholder={lang[langKey].gptSearchPlaceholder}
                    className="p-4 m-4 col-span-9 " />

                <button
                    className="py-2 px-4 m-4 bg-red-700 rounded-lg text-white col-span-3 text-xl" onClick={handleGPTSearchClick}>
                    {lang[langKey].search}

                </button>
            </form>
        </div>
    );
}

export default GptSearchBar;