import { createStore, combineReducers } from "redux";
import reduceMessagePage from "./reduceMessagePage";
import reduceMusic from "./reduceMusic";
import reduceNavPage from "./reduceNavPage";
import reduceNews from "./reduceNews";
import reducePostPage from "./reducePostPage";
import reduceSettings from "./reduceSetting";

let reducers = combineReducers({
   messagePage: reduceMessagePage,
   postPage: reducePostPage,
   navPage: reduceNavPage,
   links: reduceNews,
   gremis: reduceMusic,
   settings: reduceSettings,
})

let store = createStore(reducers);

export default store