import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "../features/users";
import themeReducer from "../features/theme";
import galleryReducer from "../features/gallery";
import likePhotosReducer from "../features/likephotos";

const store = configureStore({
    reducer:{
        users : userReducer,
        theme : themeReducer,
        gallery : galleryReducer,
        likephoto : likePhotosReducer

    }
});

export default store;