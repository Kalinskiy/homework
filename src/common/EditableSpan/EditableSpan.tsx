import React, {ChangeEvent, useState} from "react";
import Span from "../Span/Span";
import s from "../../HomeWork6/HomeWork6.module.css";
import Input from "../Input/Input";


type propsType = {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => any
    onKeyPressHandler?: (e: React.KeyboardEvent<HTMLInputElement>) => void
    changeEditMode?: () => void
    editMode?: boolean
    onBlur:any

}
const EditableSpan = (props: propsType) => {


    // const toggleMode = () => {
    //     setEditMode(!value)
    //
    //
    // }


    // const alertGreetingClick = () => {
    //     alert('Привет ' + value)
    //     setValue("")
    // }
    // const onKeyPressHandler = (e: KeyboardEvent) => {
    //     if (e.charCode === 13) {
    //         alertGreetingClick();
    //     }
    // }


    return (<div className={s.general}>
            {
                props.editMode
                    ? <span
                        onDoubleClick={props.changeEditMode}
                    >{props.value}</span>
                    : <Input
                        onChange={props.onChange}
                        value={props.value}
                        onKeyPressHandler={props.onKeyPressHandler}
                        onBlur={props.changeEditMode}
                    />
            }


        </div>
    )
}


export default EditableSpan