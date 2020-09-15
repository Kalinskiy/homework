import React from "react";
import {action} from '@storybook/addon-actions'
import HomeWork11 from "../HomeWork11/HomeWork11";
import Range from "../common/Range/Range";
import {Provider} from "react-redux";
import {store} from "../redux/store";
import HomeWork12 from "../HomeWork12/HomeWork12";

export default {
    title:'RangeExample',
    component: HomeWork11
}
export const RangeStory = (props)=>{
    return (
        <Provider store={store}>

            <HomeWork11/>
        </Provider>
    )
}