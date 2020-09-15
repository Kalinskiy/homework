import React from "react";
import s from './Range.module.css'

type PropsType = {
    minValue: number
    maxValue: number
    value: number
    onChange: any
}

const Range = (props: PropsType) => {
    return <div className={s.box}>

        <div className={s.container}>
            <input className={s.slider} type="range" min={props.minValue} max={props.maxValue} onChange={props.onChange} value={props.value}/>
        </div>
    </div>
}

export default Range