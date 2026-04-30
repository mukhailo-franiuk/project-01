import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { categoryApi } from './categorySlice/categorySlice';
import { productApi } from './productSlice/productSlice';

export const store = configureStore({
    reducer: {
        [categoryApi.reducerPath]: categoryApi.reducer,
        [productApi.reducerPath]:productApi.reducer
    },
    middleware: (getDefaultMiddleware) => { return getDefaultMiddleware().concat(categoryApi.middleware , productApi.middleware)}

});

setupListeners(store.dispatch)