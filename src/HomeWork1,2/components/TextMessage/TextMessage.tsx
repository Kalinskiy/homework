import React from 'react';
import s from './TextMessage.module.css'


type propsType = {
    text?:any
}
function TextMessage(props:propsType) {
    return (
        <div className={s.text}>
            {props.text}
        </div>

    );
}

export default TextMessage;
