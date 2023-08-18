import { configureStore } from '@reduxjs/toolkit';
import popupSlice from './Slices/popupSlice'

export const store = configureStore({
   reducer:{
      popupOpenState: popupSlice
   },
})