import React, {useState} from "react";
import s from './HomeWork13.module.css'
import Button from "../common/Button/Button";
import {homeWorkAPI} from "./api";




const HomeWork13 = () => {
    let [checkbox, setCheckbox] = useState(false)


    function onClick() {

         homeWorkAPI.hw13(checkbox).then((res: any) => {

        })
            .catch((error: any) => {
                console.log(error)
            })
    }

    return (
        <div className={s.general}>

            <Button buttonName={'click'} click={onClick}/>
            <input type="checkbox" checked={checkbox} onChange={() => {setCheckbox(!checkbox)}}/>

        </div>
    )
}

export default HomeWork13