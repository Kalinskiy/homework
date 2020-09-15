import React, {useCallback, useState} from "react";
import s from './HomeWork11.module.css'
import Range from "../common/Range/Range";


const HomeWork11 = React.memo(() => {
    const minValue = 0
    const maxValue = 100
    const [value, setValue] = useState()
    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }, [])

    return (
        <div className={s.general}>
            <span className={s.box}>{value}</span>
            <Range minValue={minValue} maxValue={maxValue} value={value} onChange={onChange}/>

        </div>
    )
})
export default HomeWork11