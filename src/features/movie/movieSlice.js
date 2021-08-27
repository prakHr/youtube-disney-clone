import {createSlice} from "@reduxjs/toolkit";

const initialState={
    recommend:null,
    trending:null,
    newDisney:null,
    original:null,

};

const movieSlice=createSlice({
    name:"movie",
    initialState,
    reducers:{
        setMovies:(state,action)=>{
            state.recommend=action.payload.recommend;
            state.trending=action.payload.trending;
            state.newDisney=action.payload.newDisney;
            state.original=action.payload.original;
        },
    },
});
export const {setMovies}=movieSlice.actions;

export const selectRecommend=(state)=>state.movie.recommend
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;