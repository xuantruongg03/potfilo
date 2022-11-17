import { legacy_createStore as createStore } from "redux";
import rootReducer from "../reducers/index.js";
const store = createStore(rootReducer);
export default store;