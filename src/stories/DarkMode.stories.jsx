import React from "react";
import HomeWork12 from "../HomeWork12/HomeWork12";
import {Provider} from "react-redux";
import {store} from "../redux/store";

export default {
    title:'HomeWork12Example',
    component: HomeWork12
}
export const HomeWork12Example = (props)=>{
    return (   <Provider store={store}>

            <HomeWork12/>
        </Provider>
    )
}