import { configureStore } from "@reduxjs/toolkit";
import { questionsApi } from "./api/questionsApi.js";
import questionsReducer from "./features/questionsSlice.js";

export const store = configureStore({
	reducer: {
		[questionsApi.reducerPath]: questionsApi.reducer,
		questions: questionsReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(questionsApi.middleware),
});
