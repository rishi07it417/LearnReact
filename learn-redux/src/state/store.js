import { configureStore } from "@reduxjs/toolkit"
import reducers from "./reducers/reducerIndex";


export const store = configureStore({reducer:reducers});