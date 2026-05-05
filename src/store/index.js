import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { categoryApi } from './categorySlice/categorySlice';
import { productApi } from './productSlice/productSlice';
import { usersApi } from './usersSlice/usersSlice';

export const store = configureStore({
    reducer: {
        [categoryApi.reducerPath]: categoryApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(
            categoryApi.middleware,
            productApi.middleware,
            usersApi.middleware
        )
    }

});

setupListeners(store.dispatch)