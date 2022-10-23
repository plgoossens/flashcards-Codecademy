import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "../features/cards/cardsSlice";
import quizzesSlice from "../features/quizzes/quizzesSlice";
import topicsSlice from "../features/topics/topicsSlice";

export default configureStore({
  reducer: {
    topics: topicsSlice,
    quizzes: quizzesSlice,
    cards: cardsSlice
  },
});
