import { createSlice } from "@reduxjs/toolkit";
import { questionsApi } from "../api/questionsApi";

const initialState = {
	questions: [],
	isLoading: false,
	error: null,
};

const questionsSlice = createSlice({
	name: "questions",
	initialState,
	reducers: {
		setQuestions: (state, action) => {
			state.questions = action.payload;
		},
		extraReducers: (builder) => {
			builder.addMatcher(
				questionsApi.endpoints.getQuestions.pending,
				(state) => {
					state.isLoading = true;
				},
			);
			builder.addMatcher(
				questionsApi.endpoints.getQuestions.fulfilled,
				(state, action) => {
					state.isLoading = false;
					state.questions = action.payload;
				},
			);
			builder.addMatcher(
				questionsApi.endpoints.getQuestions.rejected,
				(state, action) => {
					state.isLoading = false;
					state.error = action.error.message;
				},
			);
		},
	},
});

export const { setQuestions } = questionsSlice.actions;
export default questionsSlice.reducer;
