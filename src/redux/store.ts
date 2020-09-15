import {combineReducers, createStore} from "redux";
import {loadReducer} from "../HomeWork10/load-reducer";
import {themeReducer} from "./theme-reducer";


const rootReducer = combineReducers({
    load: loadReducer,
    theme:themeReducer
})
// @ts-ignore
export const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export type AppRootStateType = ReturnType<typeof rootReducer>