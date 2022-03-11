import { combineReducers, createStore} from "redux";
import reduceMessagePage from "./reduceMessagePage";
import reducePostPage from "./reducePostPage";


let redusers = combineReducers({
   reduceMessagePage,
   reducePostPage,
})

let store = createStore(redusers);


export default store;