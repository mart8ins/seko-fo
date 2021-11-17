import React from 'react';
import "./cvYearContentBox.css";

const CvYearContentBox = ({ data, language }) => {
    return (
        <div>
            {data.map((year) => {

                if (language === "eng") {

                    if (year.type === "education") {
                        return <div className="cv__content__target">

                            <div className="cv__content__target__year">
                                <p><span className="year__title">{year.eng.diploma.title}</span> {year.eng.diploma.year}</p>
                            </div>

                            <div className="cv__content__target__details__container">
                                <p className="cv__content__target__details__top">{year.eng.school}</p>
                                <p className="cv__content__target__details__bottom">{year.eng.education}</p>
                            </div>
                        </div>
                    }

                    if (year.type === "workExp") {
                        return <div className="cv__content__target">

                            <div className="cv__content__target__year">
                                <p><span className="year__title">From</span>{year.eng.from}</p>
                                <p><span className="year__title">till</span>{year.eng.to}</p>
                            </div>

                            <div className="cv__content__target__details__container">
                                <p className="cv__content__target__details__top">{year.eng.company}</p>
                                <p className="cv__content__target__details__bottom">{year.eng.profession}</p>
                            </div>

                        </div>
                    }
                }


                if (language === "lv") {

                    if (year.type === "education") {
                        return <div className="cv__content__target">

                            <div className="cv__content__target__year">
                                <p><span className="year__title">{year.lv.diploms.title}</span> {year.lv.diploms.gads}</p>
                            </div>

                            <div className="cv__content__target__details__container">
                                <p className="cv__content__target__details__top">{year.lv.iestade}</p>
                                <p className="cv__content__target__details__bottom">{year.lv.izglitiba}</p>
                            </div>
                        </div>
                    }

                    if (year.type === "workExp") {
                        return <div className="cv__content__target">

                            <div className="cv__content__target__year">
                                <p><span className="year__title">No</span>{year.lv.from}</p>
                                <p><span className="year__title">līdz</span>{year.lv.to}</p>
                            </div>

                            <div className="cv__content__target__details__container">
                                <p className="cv__content__target__details__top">{year.lv.company}</p>
                                <p className="cv__content__target__details__bottom">{year.lv.profession}</p>
                            </div>

                        </div>
                    }

                }

            })}
        </div>
    )
}

export default CvYearContentBox
