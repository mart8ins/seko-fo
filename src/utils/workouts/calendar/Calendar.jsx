import React, { useState } from 'react';
import Year from "./components/Year";

import "./calendar.css";

const Calendar = ({ year }) => {
    const [monthToogle, setMonthToogle] = useState(false)

    const toogleMonth = () => {
        setMonthToogle(!monthToogle)
    }

    return (
        <div className="calendar__container">
            <h3 onClick={toogleMonth} className={`calendar ${monthToogle && "monthToogleActive"}`}><span>{year.year}</span> years data</h3>
            {
                monthToogle && <Year months={year.months} />
            }
        </div>
    )
}

export default Calendar
