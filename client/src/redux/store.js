import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/users";
import { sellerReducer } from "./reducers/seller";
import { eventReducer } from "./reducers/event";
import { productReducer } from "./reducers/product";


const Store=configureStore({
    reducer:{
        user:userReducer,
        seller:sellerReducer,
        product:productReducer,
        event:eventReducer

    }
})

export default Store;