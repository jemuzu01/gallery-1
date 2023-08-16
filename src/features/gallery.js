import { createSlice } from "@reduxjs/toolkit";

const likeState = [
    { id: 1, url: 'First Post!', description: 'Hello!' },
    { id: 2, url: 'Second Post', description: 'More text' }
  ]

export const gallerySlice = createSlice({
    name:"gallery",
    initialState:{likeState},
    reducers:{
        showgallery :(state, action) => {
            state.likeState = action.payload
        },     
    },
});
export const { showgallery,likeGallery } = gallerySlice.actions
export default gallerySlice.reducer;