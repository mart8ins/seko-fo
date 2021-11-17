import React from 'react';
import { isLogged } from "../../../landingSeed";
import CvYearContentBox from "./cvYearContentBox/CvYearContentBox";

const WorkExp = ({ language }) => {
    return (
        <CvYearContentBox data={isLogged.workExp} language={language} />
    )
}

export default WorkExp
