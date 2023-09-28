import { createStore, combineReducers } from "redux";
import reducer from "./reducer";

const rootreducer = combineReducers({ reducer: reducer });

export const store = createStore(rootreducer);