import { createSlice } from "@reduxjs/toolkit";


export const colorSlice = createSlice({
    name:"colorchange",
    initialState:{value:""},
    reducers:{
        changeColor : (state, action) => {
            state.value = action.payload
        },
        
    },
});
export const { changeColor } = colorSlice.actions
export default colorSlice.reducer;
