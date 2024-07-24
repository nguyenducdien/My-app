import { combineReducers } from "redux";
import buttonReducer from "./authReducer";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    reducer : buttonReducer,
})
const store =configureStore({
    reducer: buttonReducer,
    
})
export default store;
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;