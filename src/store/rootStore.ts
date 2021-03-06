import { createStore, combineReducers, applyMiddleware } from "redux";
import { todoReducer } from "./todo/TodoReducer";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { AppActions } from "./models/actions";
import { createLogger } from "redux-logger";

const logger = createLogger();
const rootReducer = combineReducers({ todoReducer });
export type AppState = ReturnType<typeof rootReducer>;
export const store = createStore<AppState, AppActions, {}, {}>(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>, logger)
);
