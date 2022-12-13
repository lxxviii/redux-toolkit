import { configureStore } from "@reduxjs/toolkit"
import counterSliceReducer from './stores/counterSlice'



export default configureStore({
    reducer: {
        counter: counterSliceReducer
    },
})