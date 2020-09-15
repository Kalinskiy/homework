import React from 'react';
import  s from './Button.module.css';

type propsType={
    buttonName:string
    click:()=>void
}
function Button(props:propsType) {

    return (
        <>
            <button  className={s.button} onClick={props.click}>{props.buttonName}</button>
        </>
    )

}


export default Button