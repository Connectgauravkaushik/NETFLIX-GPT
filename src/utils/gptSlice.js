import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        movieResults: null,
        movieNames: null
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch
        },
        addGptMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;

        },
        removeMovieResult: (state,action) => {
           return null;
        }
    },
});

export const { toggleGptSearchView, addGptMovieResult , removeMovieResult } = gptSlice.actions;
export default gptSlice.reducer;