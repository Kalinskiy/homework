import React, {useState} from 'react';
import Span from "../common/Span/Span";
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";
import s from './HomeWork3.module.css'


const HomeWork3 = () => {
    const spanValue = 0;
    const [increment, setIncrement] = useState(spanValue)
    const [value, setValue] = useState('')

    const alertGreetingClick = () => {
        alert('Привет ' + value)
         setValue('')
    }

    const incrementFunction = () => {
        setIncrement(increment + 1)
    }

    const onChange = (e: any) => {
        setValue(e.currentTarget.value)

    }

    return (
        <div className={s.general}>
            <Span increment={increment}/>
            <Input onChange={onChange} value={value}/>
            <Button  buttonName={'Alert'} click={alertGreetingClick}/>
            <Button  buttonName={'Incr'} click={incrementFunction} />
        </div>
    )

}


export default HomeWork3