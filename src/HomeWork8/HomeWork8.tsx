import React, {useReducer} from "react";
import {checkAC, hwReducer, sortUp, sortDown} from "./homeWorkReducer";
import s from './HomeWork8.module.css'
import Button from "../common/Button/Button";



export type Person = {
    id: string
    name: string
    age: number
}

export const HomeWork8 = () => {


    let [state, dispatchToState] = useReducer(hwReducer, [
        {id: '44432', name: 'Dima', age: 20},
        {id: '63122', name: 'Vanya', age: 15},
        {id: '15412', name: 'Petya', age: 18},
        {id: '54535', name: 'Dasha', age: 38},
        {id: '63737', name: 'Andrey', age: 29}
    ])

    const sortUpFunc = () => {
        dispatchToState(sortUp())
    }
    const sortDownFunc = () => {
        dispatchToState(sortDown())
    }
    const check = () => {
        dispatchToState(checkAC())
    }

    return (
        <div className={s.container}>
            {state.map((el: Person) => {
                return (


                    <div className={s.general}>
                        <div className={s.name}>{el.name}</div>
                        <div>{el.age}</div>

                    </div>

                )
            })}
            <div className={s.buttons}>

                <Button buttonName={'Check'} click={check}/>
                <Button buttonName={'Sort-DOWN'} click={sortDownFunc}/>
                <Button buttonName={'Sort-UP'} click={sortUpFunc}/>
            </div>

        </div>
    )
}


export default HomeWork8