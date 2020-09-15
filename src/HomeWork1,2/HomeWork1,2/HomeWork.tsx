import React from 'react';
import s from './HomeWork.module.css'
import MessageDisplay from "../components/MessageDisplay/MessageDisplay";


function HomeWork1() {
    const array = ['рационалист, ' , 'коммунист, ', 'анимешник']


    return (
        <div className={s.main}>
            <MessageDisplay text={'Yo man,what`s going on here?'}/>
            <MessageDisplay text={

                array.map( (item: any, index: any) => {
                    return <span key={index} className={ index === 1 ? s.arr : ''}>{item}</span>

                })
            }/>


        </div>
    );
}

export default HomeWork1;
