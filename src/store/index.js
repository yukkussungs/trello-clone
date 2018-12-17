import { createStore, applyMiddleware } from "redux";
import rootRecducer from "../reducers";

const store = createStore(rootRecducer);

export default store;
