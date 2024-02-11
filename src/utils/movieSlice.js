import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        // nowPlayingMovies: null,
        popularMovies: null,
        trailerVideo: null,
        NowPlayingMovies: null,
        upcomingMovies: null,
        topRatedMovies: null,
        trendingMovies: null,
        tvShows: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.NowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload;
        },
        addTvShows: (state, action) => {
            state.tvShows = action.payload;
        }

    }
});

export const { addNowPlayingMovies, addPopularMovies, addTrailerVideo, addUpcomingMovies, addTopRatedMovies, addTrendingMovies ,addTvShows } = movieSlice.actions;
export default movieSlice.reducer;