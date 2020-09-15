import React from 'react';
import s from './Input.module.css';


type propsType = {
    error?: boolean
    onChange: any
    value: string
    onKeyPressHandler?: any
    toggleMode?:any
    onBlur?: any

}
const Input = (props: propsType) => {
    console.log(props.value)


    return (

        <div className={props.error ? s.error : ''}>
            <input type="text"
                   onKeyPress={props.onKeyPressHandler}
                   onChange={props.onChange}
                   value={props.value}
                   onDoubleClick={props.toggleMode}
                   onBlur={props.onBlur}
            />
        </div>
    )

}


export default Input