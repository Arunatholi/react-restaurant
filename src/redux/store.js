import { configureStore } from '@reduxjs/toolkit';
import restaurantSlice from './restaurantSlice';


const store = configureStore({
    reducer:{
        data:restaurantSlice

    }
});

export default store;