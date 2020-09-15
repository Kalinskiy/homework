import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {CircularProgress} from "@material-ui/core";
import {setLoadingAC} from "./load-reducer";
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";
import container from '../common/styles/container/container.module.css'


const HomeWork10 = () => {
const dispatch = useDispatch()
    const loading  = useSelector<AppRootStateType>(state=>state.load.loading)

    const on = ()=>{
        dispatch( setLoadingAC(true))
    }
    const off = ()=>{
        dispatch( setLoadingAC(false))
    }
const onClick=()=>{

    on()
    setTimeout(off,3000)
}
 
    return (
        <div className={container.container}>
            {loading? <CircularProgress />: <Input type="range"/> }
            <Button buttonName={'Change'} click={onClick}/>

        </div>
    )
}
export default HomeWork10