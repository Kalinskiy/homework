import React from 'react';
import s from './Input.module.css';


type propsType = {
    error?: boolean
    onChange?: any
    value?: string
    onKeyPressHandler?: any
    toggleMode?:any
    onBlur?: any
    type?:'text' | 'radio' | 'checkbox' | 'date' | 'number' | 'password' | 'range' | 'submit'
    checked?:boolean
    className?:any
    id?:any

}
const Input = (props: propsType) => {
    console.log(props.value)


    return (

        <div className={props.error ? s.error : ''}>
            <input type={props.type}
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