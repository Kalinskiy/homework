import React, {useEffect, useState} from "react";
import s from './HomeWork12.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {changeModeAC} from "../redux/theme-reducer";


const HomeWork12 = () => {
    const dispatch = useDispatch()
    const darkMode = useSelector<AppRootStateType, boolean>(state => state.theme.darkMode)
    useEffect(() => {
        console.log( (JSON.parse(localStorage.getItem('dark') as any) ))
        dispatch(changeModeAC( (JSON.parse(localStorage.getItem('dark') as string) || false) ) )
        console.log( 'dark mode from ls', darkMode)
    },[])

    useEffect(() => {
        console.log('redux', darkMode)
        console.log( '2', JSON.parse(localStorage.getItem('dark') as any ))
        localStorage.setItem('dark', JSON.stringify(darkMode))
    }, [darkMode])


//   const localStorageScheme = ()=>{
//     return JSON.parse(localStorage.getItem('dark') as string) || false
// }
    const onChange = () => {
        console.log('onchange')
        dispatch(changeModeAC(!darkMode))
    }


    return <div className={s.general}>

        <div className={darkMode ? s.dark : ''}>
            <div className={s.toggleContainer}>
                <span style={{color: darkMode ? 'grey' : 'yellow'}}>☼️</span>
                <span className={s.toggle}>
                    <input

                        checked={darkMode}
                        onChange={onChange}
                        type="checkbox"
                        className={s.checkbox}
                        id={s.checkbox}
                    />
                    <label htmlFor={s.checkbox}></label>
              </span>
                <span style={{color: darkMode ? 'yellow' : 'grey'}}>☽</span>
            </div>
        </div>
    </div>
}

export default HomeWork12