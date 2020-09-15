import React from 'react';
import s from './Navbar.module.css';
import {HashRouter, NavLink} from "react-router-dom";


const Junior = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>JUNIOR:</div>
            <div className={s.item}>
                <NavLink to='/homework6' activeClassName={s.activeLink}>home-work6</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/homework7' activeClassName={s.activeLink}>home-work7</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/homework8' activeClassName={s.activeLink}>home-work8</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/homework9' activeClassName={s.activeLink}>home-work9</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/homework10' activeClassName={s.activeLink}>home-work10</NavLink>
            </div>



        </nav>


    )
}
export default Junior;