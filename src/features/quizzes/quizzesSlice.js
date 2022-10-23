import { createSlice } from "@reduxjs/toolkit";
import { addQuizIdToTopic } from "../topics/topicsSlice";

const initialState = {quizzes: {}};

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: initialState,
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes = {...state.quizzes, [action.payload.id] : action.payload};
        }
    }
});

export const createQuiz = ({quizId, topicId, name, cardIds}) => {
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz({id: quizId, name: name, topicId: topicId, cardIds: cardIds}));
        dispatch(addQuizIdToTopic({quizId, topicId}));
    };
};

export const selectQuizzes = (state) => { return state.quizzes.quizzes };
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;