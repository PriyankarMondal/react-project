import { configureStore } from '@reduxjs/toolkit'
import CountReducer from "./CountReducer"

export const store = configureStore({
  reducer: {
    countReducer: CountReducer
  },
})

