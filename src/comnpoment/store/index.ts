import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    reducer : authReducer,
})
const store =configureStore({
    reducer : rootReducer,
})
export default store;
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;