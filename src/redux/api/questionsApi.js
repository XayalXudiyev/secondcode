import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const questionsApi = createApi({
	reducerPath: "questionsApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
	endpoints: (builder) => ({
		getQuestions: builder.query({
			query: () => "questions",
		}),
	}),
});

export const { useGetQuestionsQuery } = questionsApi;
