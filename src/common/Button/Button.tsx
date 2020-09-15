import React from 'react';
import './Button.module.css';

type propsType={
    buttonName:string
    click:()=>void
}
function Button(props:propsType) {




    return (
        <>
            <button onClick={props.click}>{props.buttonName}</button>
        </>
    )

}


export default Button