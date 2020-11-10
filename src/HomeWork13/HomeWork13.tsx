import React, {useState} from "react";
import Button from "../common/Button/Button";
import {homeWorkAPI} from "./api";
import container from '../common/styles/container/container.module.css'


const HomeWork13 = () => {
    let [checkbox, setCheckbox] = useState(false)


    async function onClick() {
        try {
            const res = await homeWorkAPI.hw13(checkbox)
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <div className={container.container}>

            <Button buttonName={'click'} click={onClick}/>
            <input type="checkbox" checked={checkbox} onChange={() => {
                setCheckbox(!checkbox)
            }}/>

        </div>
    )
}

export default HomeWork13