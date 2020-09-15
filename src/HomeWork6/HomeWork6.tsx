import React, {ChangeEvent, useState} from 'react';
import EditableSpan from "../common/EditableSpan/EditableSpan";
import Button from "../common/Button/Button";
import s from './HomeWork6.module.css'

type StateType = {
    x: string
}

export const HomeWork6 = (props: any) => {

    const [value, setValue] = useState("transformed!")
    let [editMode, setEditMode] = useState(true);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)

    }
    const alertGreetingClick = () => {
        alert('Привет ' + value)
        setValue("")
    }

    const changeEditMode = () => {
        if (!editMode) {
            setEditMode(true)
        } else {
            setEditMode(false)
        }
    }

    function saveState<T> (key: string, state: T) {
        const stateAsString = JSON.stringify(state);
        localStorage.setItem(key, stateAsString)
    }

    function getState<T>(key: string, defaultState: T) {
        const stateAsString = localStorage.getItem(key);
        if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
        return defaultState;
    }

    const saveStateHandler = () => {
        saveState<StateType>('test', {x:value})
    }

    const getStateHandler = () => {
        let state: StateType = getState('test', {x: 'default'})
        setValue(state.x)
    }
    // const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //     if (e.charCode === 13) {
    //         alertGreetingClick();
    //     }
    // }


    return (<div className={s.general}>
        <EditableSpan value={value}
                      onChange={onChange}
                      editMode={editMode}
                      changeEditMode={changeEditMode}
                      onBlur={()=>{}}
                      onKeyPressHandler={()=>{}}
        />
            <Button buttonName={'Add'} click={saveStateHandler}/>
            <Button buttonName={'Get'} click={getStateHandler}/>
        </div>
    )

}

