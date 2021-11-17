import React, { useState } from 'react';
import "./coding.css";
import { isLogged } from "../../../landingSeed";


const Coding = ({ language }) => {
    const lang = language === "eng" ? "eng" : "lv";

    const [activeStackItem, setActiveStackItem] = useState("HTML");

    const handleStackItem = (e) => {
        setActiveStackItem(e.target.id);
    }

    return (
        <div className="cv__coding__container">

            <h3 className="cv__coding__title">{isLogged.coding.title[lang]}</h3>

            <div className="cv__coding__stack__items">
                {isLogged.coding.stack.map((item) => {
                    return <button
                        onClick={handleStackItem}
                        id={`${item.name}`}
                        className={`cv__coding__stack__item__btn ${item.name === activeStackItem && "active__stack__btn"}`}
                    >{item.name}</button>
                })}
            </div>

            <div className="cv__coding__stack__description">
                {isLogged.coding.stack.map((item) => {
                    if (item.name === activeStackItem) {
                        return <p>{item[lang].text}</p>
                    }
                })}

                <div>
                    <div className="cv__coding__stack__frameworks">
                        {isLogged.coding.stack.map((item) => {
                            if (item.name === activeStackItem && item.frameworks.length) {
                                return item.frameworks.map((it) => {
                                    return <div className="cv__coding__framework">
                                        <h4>Framework <span>{it.name}</span></h4>
                                        <p>{it[lang]}</p>
                                    </div>
                                })
                            }
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Coding
