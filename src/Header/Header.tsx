import React, {useState} from "react";
import s from './Header.module.css'
import Navbar from "../Navbar/Navbar";
import PreJunior from "../Navbar/PreJunior";
import Junior from "../Navbar/Junior";
import JuniorPlus from "../Navbar/JuniorPlus";

const Header = ()=>{

    const [trigger, setTrigger] = useState<null | string>(null)

    const changeLinks = (value:string)=> {

        setTrigger(value) //1
    }

    return <div className={s.header}>
       <div className={s.containerItem}>
           <Navbar trigger={trigger}
                   changeLinks={changeLinks}
           />
       </div>
        <div className={s.containerItem1}>

            {trigger === 'preJun' ? <PreJunior/> : null}
            {trigger === 'junior' ? <Junior/> : null}
            {trigger === 'juniorplus' ? <JuniorPlus/> : null}

        </div>
    </div>
}

export default Header