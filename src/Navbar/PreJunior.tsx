import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const PreJunior = () => {


    return (

        <nav className={s.nav}>
            <span className={'title'}>PREJUNIOR:</span>
            <div className={s.item}>
                <NavLink to='/homework1' activeClassName={s.activeLink}>home-work1,2</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/homework3' activeClassName={s.activeLink}>home-work3</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/homework4' activeClassName={s.activeLink}>home-work4</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/homework5' activeClassName={s.activeLink}>home-work5</NavLink>
            </div>

        </nav>


    )
}
export default PreJunior;