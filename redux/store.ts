import { reducer as formReducer } from "redux-form";
import logger from "redux-logger";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import { bookReducer } from "./books";
import { cycleReducer } from "./cycle";
import { chapterReducer } from "./chapter";
import { genresReducer } from "./genres";
import { userReducer } from "./user";
import { commentsReducer } from "./comments";

const rootReducer = combineReducers({
  books: bookReducer,
  user: userReducer,
  cycle: cycleReducer,
  chapter: chapterReducer,
  genres: genresReducer,
  form: formReducer,
  comments: commentsReducer,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
      // TODO: разобраться с тем, как определить правильную разницу между серверным стейтом и фронтовым
      user: { ...state.user, ...action.payload.user }, // временный костыль, пока не разерусь, как делать слияние стейта фронта и сервера
      form: state.form, // временный костыль, пока не разерусь, как делать слияние стейта фронта и сервера
    };
    return nextState;
  }
  return rootReducer(state, action);
};

const initStore = () => createStore(reducer, applyMiddleware(thunkMiddleware, logger));

export const wrapper = createWrapper(initStore);
