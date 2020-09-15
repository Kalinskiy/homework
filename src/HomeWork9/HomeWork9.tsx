import React, {useState} from "react";
import s from './HomeWork9.module.css'


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
        <div className={s.general}>
            <div>
                {date.toString()}
            </div>
            <button title={"REFRESH"}   onClick={onClickStartTime}>REFRESH</button>
            <button title={"STOP"}   onClick={onClickStopTime}>STOP</button>
        </div>
    )
}
export default HomeWork9