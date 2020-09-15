import React, {useCallback, useState} from "react";
import Range from "../common/Range/Range";
import Span from "../common/Span/Span";
import container from '../common/styles/container/container.module.css'


const HomeWork11 = React.memo(() => {
    const minValue = 0
    const maxValue = 100
    const [value, setValue] = useState()
    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }, [])

    return (
        <div className={container.container}>
            <Span  value={value}/>
            <Range minValue={minValue} maxValue={maxValue} value={value} onChange={onChange}/>

        </div>
    )
})
export default HomeWork11