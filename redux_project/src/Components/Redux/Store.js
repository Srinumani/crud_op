import { configureStore } from "@reduxjs/toolkit";
 
import UserReducers from "./UserReducers";

 export const userstore=configureStore({
    reducer:{
        users:UserReducers

    }
})