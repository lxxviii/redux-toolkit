import { configureStore } from "@reduxjs/toolkit"
import counterSliceReducer from './counterSlice'
import siteSliceReducer from './siteSlice'
import authSliceReducer from './authSlice'

export default configureStore({
    reducer: {
        counter: counterSliceReducer,
        site: siteSliceReducer,
        auth: authSliceReducer
    },
})