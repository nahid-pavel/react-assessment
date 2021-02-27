import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    profileData: {
        isAuth: false
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setSignIn: (state, action) => {
            const { payload } = action;
            state.profileData = {
                ...payload,
                isAuth: true
            }

        },
        setLogout: (state, action) => {
            state.profileData = {
                isAuth: false
            }

        }
    }

})

