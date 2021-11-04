import React, { useState, useEffect } from 'react';
import "./month.css";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { monthsNames } from "./dateSeed";
import Day from "./Day";

const Month = ({ month }) => {
    console.log(month)
    const monthName = monthsNames[month.month - 1];
    const [days, setDays] = useState([]);

    useEffect(() => {
        const allDays = [];
        let date = undefined;
        let workoutDayId = undefined;
        const daysToRender = () => {
            for (let d = 1; d <= month.daysInMonth; d++) {
                date = d;
                workoutDayId = d;
                allDays.push({
                    date,
                    workoutDayId
                })
            }

        }
        daysToRender();
        setDays(allDays)
        console.log(days)
    }, [])



    // console.log(days)


    return (
        <div className="month__top__container">
            <h3>{monthName}</h3>

            <div className="month__days__container">

                {days && days.map((day) => {
                    return <Day key={uuidv4()} day={day} />
                })}

            </div>

        </div>
    )
}

export default Month
