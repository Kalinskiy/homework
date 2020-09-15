import React from "react";
import {RadioItem} from "../../HomeWork7/HomeWork7";
import s from '../../HomeWork7/HomeWork7.module.css'




type RadioPropsType = {
    value: Array<RadioItem>
    onChangeRadio: (value: string) => void
}

const Radio = (props: RadioPropsType) => {
    const onChangeHandler = (e: any) => {
        props.onChangeRadio(e.currentTarget.value)
    }
    return <>
        {props.value.map((el) => {
            return (
                <div className={''}>
                    <input
                        type='radio'
                        key={el.id}
                        onChange={onChangeHandler}
                        id={el.id}
                        value={el.value}
                        checked={el.checked}
                    />
                    <label htmlFor={el.id}>{el.value}</label>
                </div>
            )

        })}
    </>
}
export default Radio