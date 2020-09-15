import React, {useState} from "react";
import Button from "../common/Button/Button";
import {homeWorkAPI} from "./api";
import container from '../common/styles/container/container.module.css'




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
        <div className={container.container}>

            <Button buttonName={'click'} click={onClick}/>
            <input type="checkbox" checked={checkbox} onChange={() => {setCheckbox(!checkbox)}}/>

        </div>
    )
}

export default HomeWork13