import React from "react";
import s from './HomeWork10.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {CircularProgress} from "@material-ui/core";
import {setLoadingAC} from "./load-reducer";


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
        <div className={s.general}>
            {loading? <CircularProgress />: <input type="range"/> }
            <button onClick={onClick}>Change</button>


        </div>
    )
}
export default HomeWork10