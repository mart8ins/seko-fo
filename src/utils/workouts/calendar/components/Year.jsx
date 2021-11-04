import React from 'react';
import "./year.css";
import { v4 as uuidv4 } from 'uuid';
import Month from "./Month";

const Year = ({ months }) => {
    return (
        <div className="year__top__container">
            {months
                &&
                months.map((month) => {
                    return <Month key={uuidv4()} month={month} />
                })
            }

        </div>
    )
}

export default Year
