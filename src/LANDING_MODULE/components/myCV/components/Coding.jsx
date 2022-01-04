import React, { useState } from 'react';
import "./coding.css";
import { isLogged } from "../../../landingSeed";
import { v4 as uuidv4 } from 'uuid';


const Coding = ({ language }) => {
    const lang = language === "eng" ? "eng" : "lv";

    const [activeStackItem, setActiveStackItem] = useState("HTML, HTTP");

    const handleStackItem = (e) => {
        setActiveStackItem(e.target.id);
    }

    return (
        <div className="cv__coding__container">

            <h3 className="cv__coding__title">{isLogged.coding.title[lang]}</h3>

            <div className="cv__coding__stack__items">
                {isLogged.coding.stack.map((item) => {
                    return <button
                        key={uuidv4()}
                        onClick={handleStackItem}
                        id={`${item.name}`}
                        className={`cv__coding__stack__item__btn ${item.name === activeStackItem && "active__stack__btn"}`}
                    >{item.name}</button>
                })}
            </div>

            <div className="cv__coding__stack__description">
                {isLogged.coding.stack.map((item) => {
                    if (item.name === activeStackItem) {
                        return <p key={uuidv4()}>{item[lang].text}</p>
                    } else {
                        return
                    }
                })}

                <div>
                    <div>
                        {isLogged.coding.stack.map((item) => {
                            if (item.name === activeStackItem && item.frameworks.length) {
                                return item.frameworks.map((it) => {
                                    return <div key={uuidv4()} className="cv__coding__framework">
                                        <h4>Framework <span>{it.name}</span></h4>
                                        <p>{it[lang]}</p>
                                    </div>
                                })
                            } else {
                                return
                            }
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Coding
