import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const JuniorPlus = () => {
    return (
        <nav className={s.nav}>

            <div className={s.item}>
                <NavLink to='/homework11' activeClassName={s.activeLink}>home-work11</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/homework12' activeClassName={s.activeLink}>home-work12</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/homework13' activeClassName={s.activeLink}>home-work13</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/homework14' activeClassName={s.activeLink}>home-work14</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/homework15' activeClassName={s.activeLink}>home-work15</NavLink>
            </div>



        </nav>


    )
}
export default JuniorPlus;