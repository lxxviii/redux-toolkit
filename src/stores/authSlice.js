import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: localStorage.getItem('auth') ?? false
    },
    reducers: {
        login: (state, action) => {
            localStorage.setItem('auth', action.payload)
            state.user = action.payload
        },
        logout: state => {
            state.user = false
            localStorage.removeItem('auth')
        }
    },
})
export const { login, logout } = authSlice.actions
export default authSlice.reducer
