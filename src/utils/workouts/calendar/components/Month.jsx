import React, { useState, useEffect } from 'react';
import "./month.css";
import { v4 as uuidv4 } from 'uuid';
import { monthsNames } from "./dateSeed";
import Day from "./Day";

const Month = ({ month }) => {
    const monthName = monthsNames[month.month - 1];
    const [calendarDays, setCalendarDays] = useState([]);
    const [editedDays, setEditedDays] = useState([]);

    // initilize calendar days for month
    useEffect(() => {
        const allDays = [];
        let date = undefined;
        let workoutDayId = undefined;
        const daysToRender = () => {
            for (let d = 1; d <= month.daysInMonth; d++) {
                date = d;
                workoutDayId = undefined;
                allDays.push({
                    date,
                    workoutDayId
                })
            }

        }
        daysToRender();
        setCalendarDays(allDays)
    }, [month]);


    // check if days has wokrouts registred in users workout data
    useEffect(() => {
        const editedDaysArray = calendarDays;
        // loop through calendar days and attach training day Id
        month.training.forEach((trainingDay) => {
            const fullDate = trainingDay.date.split("-");
            const date = fullDate[2]
            const dW0 = Number(date[0] === "0" ? date[1] : date); // existing training date nummber
            const workoutDayId = trainingDay._id;

            // index of date what needs to be edited with training day ID
            const findIndexOfDayInCalendar = calendarDays.findIndex((day) => {
                return day.date === dW0;
            })

            editedDaysArray[findIndexOfDayInCalendar] = {
                date: dW0,
                workoutDayId
            }
        })
        setEditedDays(editedDaysArray);
    }, [month, calendarDays])

    return (
        <div className="month__top__container">
            <h3>{monthName}</h3>

            <div className="month__days__container">

                {editedDays && editedDays.map((day) => {
                    return <Day key={uuidv4()} day={day} />
                })}

            </div>

        </div>
    )
}

export default Month
