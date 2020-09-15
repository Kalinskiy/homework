import React from 'react';
import s from './Navbar.module.css';


const Navbar = (props: any) => {

    const preJun = 'preJun'
    const junior = 'junior'
    const juniorplus = 'juniorplus'

    const onclickHandlerPreJunior = () => {
        props.changeLinks(preJun)
    }
    const onclickHandlerJunior = () => {
        props.changeLinks(junior)
    }
    const onclickHandlerJuniorPlus = () => {
        props.changeLinks(juniorplus)
    }

    return (
        <nav className={s.nav}>
            <div className={s.items}>
                <div onClick={onclickHandlerPreJunior} className={s.titleNameBar}>Pre-junior</div>
                <div className={s.item}>
                    <div onClick={onclickHandlerJunior} className={s.titleNameBar}>Junior</div>
                </div>
                <div className={s.item}>
                    <div onClick={onclickHandlerJuniorPlus} className={s.titleNameBar}>JuniorPlus</div>
                </div>
            </div>

        </nav>


    )
}
export default Navbar;