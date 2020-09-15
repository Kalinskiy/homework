import React, {useState} from 'react';
import Span from "../common/Span/Span";
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";
import s from './HomeWork4.module.css'


const HomeWork4 = () => {
    const spanValue = 0;
    const [spanDisplay, setSpanDisplay] = useState(spanValue)//приплюсовка спана
    const [value, setValue] = useState("")//алерт спана приветствие
    const [error,setError] = useState(true) // при передачи пропса error в инпут будет красный фон





    const alertGreetingClick = () => {
        alert('Привет ' + value)
        setValue("")
    }

    const incrementFunction = () => {
        setSpanDisplay(spanDisplay + 1)
    }

    const onChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)

    }
    const onKeyPressHandler = (e: KeyboardEvent)=>{
        if (e.charCode === 13) {
            alertGreetingClick();
    
        }


    }

    return (
        <div className={s.general}>
            <Span spanDisplay={spanDisplay} changeEditMode={()=>{}}/>
            <Input onChange={onChange} value={value}  onKeyPressHandler={onKeyPressHandler} onBlur={()=>{}} error={false} toggleMode={()=>{}}/>
            <Button  buttonName={'Alert'} click={alertGreetingClick}/>
            <Button  buttonName={'Incr'} click={incrementFunction} />
        </div>
    )

}


export default HomeWork4