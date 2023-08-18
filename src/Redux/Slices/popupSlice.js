import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   openPopup: false
}

export const popupSlice = createSlice({
   name:'popupOpenState',
   initialState,
   reducers:{
      changeState: state => {
         state.openPopup = !state.openPopup
      }
   }
})

export const {changeState} = popupSlice.actions
export const popupState = state => state.openPopup
export default popupSlice.reducer