import { createSlice } from "@reduxjs/toolkit";

const initialState = {topics: {}};

const topicsSlice = createSlice({
    name: 'topics',
    initialState: initialState,
    reducers: {
        addTopic: (state, action) => {
            const newTopic = {
                ...action.payload,
                quizIds: []
            };
            state.topics = {...state.topics, [action.payload.id] : newTopic};
        },
        addQuizIdToTopic: (state, action) => {
            state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);
        }
    }
});

export const selectTopics = (state) => {return state.topics.topics};
export const { addTopic, addQuizIdToTopic } = topicsSlice.actions;
export default topicsSlice.reducer;