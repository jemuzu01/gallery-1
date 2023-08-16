import React from 'react'
import { createSlice } from "@reduxjs/toolkit";


const value = [
]

export const likePhotoSlice = createSlice({
    name:"likephotos",
    initialState:{value},
    reducers:{
        likePhotos :(state, action) => {
            state.value.push(action.payload)
        }, 
    },
});
export const { likePhotos,countLikePhotos } = likePhotoSlice.actions
export default likePhotoSlice.reducer;