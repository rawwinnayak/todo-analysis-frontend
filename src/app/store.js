import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todo/todoSlice";

export const store = configureStore({
    reducer: {
        // Define a top-level state field named `todo`, handled by `todoReducer`
        todo: todoReducer,
    },
    });

