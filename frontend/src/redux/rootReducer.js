import { combineReducers } from 'redux';
import { authSlice } from '../auth/_redux/Slice';

export const rootReducer = combineReducers({
    auth: authSlice.reducer
})