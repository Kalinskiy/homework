import React from 'react';
import s from './MessageDisplay.module.css'
import TextMessage from "../TextMessage/MessageDisplay";


type propsType ={
    text:any
}
function MessageDisplay(props:propsType) {
    return (
        <div className={s.general}>
            <div className={s.image}></div>
            <div className={s.messageBlock}>
             <TextMessage text={props.text}/>
            </div>
        </div>
    );
}

export default MessageDisplay;
