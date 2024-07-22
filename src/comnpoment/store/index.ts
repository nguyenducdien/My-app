import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    reducer : authReducer,
})
const store =configureStore({
    reducer : rootReducer,
})
export default store;
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;