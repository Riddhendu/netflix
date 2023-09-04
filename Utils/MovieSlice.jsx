import { createSlice } from "@reduxjs/toolkit";



const movieSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null
    },
    reducers:{
        addMovies:(state,action)=>{
           state.nowPlayingMovies = action.payload;
        },
        trailerVideos:(state,action)=>{
            state.trailerVideo = action.payload;
         }
    }

});
export const {addMovies,trailerVideos} =movieSlice.actions;

export default movieSlice.reducer;