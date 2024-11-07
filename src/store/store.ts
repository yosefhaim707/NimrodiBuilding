// FILL HERE 3.3


import { configureStore } from "@reduxjs/toolkit";
import floorReducer from "./floorreducer";
import roleReducer from "./Rolereducer";

export const store = configureStore({
    reducer: {
        floors: floorReducer.reducer,
        role: roleReducer.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;