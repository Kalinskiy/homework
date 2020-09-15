import React, {useState} from 'react';
import Span from "../common/Span/Span";
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";
import container from '../common/styles/container/container.module.css'


const HomeWork3 = () => {
    const spanValue = 0;
    const [spanDisplay, setspanDisplay] = useState(spanValue)
    const [value, setValue] = useState('')

    const alertGreetingClick = () => {
        alert('Привет ' + value)
         setValue('')
    }

    const incrementFunction = () => {
        setspanDisplay(spanDisplay + 1)
    }

    const onChange = (e: any) => {
        setValue(e.currentTarget.value)

    }

    const onKeyPressHandler = (e: KeyboardEvent)=>{
        if (e.charCode === 13) {
            alertGreetingClick();
        }

    }
    return (
        <div className={container.container}>
            <Span spanDisplay={spanDisplay} onDoubleClick={()=>{}} />
            <Input onChange={onChange} value={value} onKeyPressHandler={onKeyPressHandler} onBlur={()=>{}}/>
            <Button  buttonName={'Alert'} click={alertGreetingClick}/>
            <Button  buttonName={'Incr'} click={incrementFunction} />
        </div>
    )

}


export default HomeWork3