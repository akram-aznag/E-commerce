import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice";
const store=configureStore({
    reducer:{
        User:userReducer,
    }
});
export default store;