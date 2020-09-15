import React, {useState} from 'react';
import './App.css';
import {HashRouter, Route} from "react-router-dom";
import PreJunior from "./Navbar/PreJunior";
import Junior from "./Navbar/Junior";
import JuniorPlus from "./Navbar/JuniorPlus";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import HomeWork7 from "./HomeWork7/HomeWork7";
import HomeWork1 from "./HomeWork1,2/HomeWork1,2/HomeWork";
import HomeWork3 from "./HomeWork3/HomeWork3";
import {HomeWork6} from "./HomeWork6/HomeWork6";
import HomeWork4 from "./HomeWork4/HomeWork4";
import HomeWork8 from './HomeWork8/HomeWork8';
import HomeWork9 from "./HomeWork9/HomeWork9";
import HomeWork10 from "./HomeWork10/HomeWork10";
import HomeWork11 from "./HomeWork11/HomeWork11";
import HomeWork12 from "./HomeWork12/HomeWork12";
import HomeWork13 from "./HomeWork13/HomeWork13";


function App() {

    const [trigger, setTrigger] = useState<null | string>(null)
    const changeLinks = (value:string)=> {

        setTrigger(value)
    }


    return (

        <div className={'App'}>
            <HashRouter>

                <Header/>
                <Navbar trigger={trigger}
                        changeLinks={changeLinks}/>


                {trigger === 'preJun' ? <PreJunior/> : null}
                {trigger === 'junior' ? <Junior/> : null}
                {trigger === 'juniorplus' ? <JuniorPlus/> : null}


                <Route path='/homework1' render={() => <HomeWork1/>}/>
                <Route path='/homework3' render={() => <HomeWork3/>}/>
                <Route path='/homework4' render={() => <HomeWork4/>}/>
                <Route path='/homework6' render={() => <HomeWork6/>}/>
                <Route path='/homework7' render={() => <HomeWork7/>}/>
                <Route path='/homework8' render={() => <HomeWork8/>}/>
                <Route path='/homework9' render={() => <HomeWork9/>}/>
                <Route path='/homework10' render={() => <HomeWork10/>}/>
                <Route path='/homework11' render={() => <HomeWork11/>}/>
                <Route path='/homework12' render={() => <HomeWork12/>}/>
                <Route path='/homework13' render={() => <HomeWork13/>}/>





            </HashRouter>
        </div>
    )
}

export default App;
