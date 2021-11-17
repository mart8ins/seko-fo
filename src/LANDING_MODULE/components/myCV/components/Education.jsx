import React from 'react';
import { isLogged } from "../../../landingSeed";
import CvYearContentBox from "./cvYearContentBox/CvYearContentBox";


const Education = ({ language }) => {
    return (
        <CvYearContentBox data={isLogged.education} language={language} />
    )
}

export default Education
