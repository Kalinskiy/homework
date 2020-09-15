import React, {useState} from "react";
import s from './HomeWork9.module.css'
import Button from "../common/Button/Button";
import container from '../common/styles/container/container.module.css'


  const HomeWork9 = () => {

    const [timerId, setTimerId] = useState();
    const [date, setDate] = useState(new Date());

    const onClickStartTime = () => {
        clearInterval(timerId); // останавливает предыдущий таймер
        const timer_id = setInterval(() => setDate(new Date()), 1000);
        setTimerId(timer_id);
    }
    const onClickStopTime = () => clearInterval(timerId)

    return (
        <div className={container.container}>
            <div>
                {date.toString()}
            </div>
            <Button buttonName={"REFRESH"}   click={onClickStartTime}/>
            <Button buttonName={"STOP"}   click={onClickStopTime}/>
        </div>
    )
}
export default HomeWork9