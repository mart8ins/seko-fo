import React, { useState, useContext, useEffect, useRef } from 'react';
import "./userData.css";
import { AuthContext } from '../../context/auth-context';
import { changeAbout } from "../../fetch/profile";




const AboutMe = () => {
    const areaRef = useRef();

    const { authData, setAuthData } = useContext(AuthContext);
    const [text, setText] = useState("");
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (authData.about) {
            setText(authData.about);
        }
    }, [authData]);

    const changeHandler = (e) => {
        setText(e.target.value);
    };

    const send = (e) => {
        e.preventDefault();
        changeAbout(authData.token, text);
        setAuthData({
            ...authData,
            about: text
        })
        setActive(false);
    };

    const activateSave = (e) => {
        e.preventDefault();
        setActive(true);
    };

    // after activating editing, set textarea on focus
    useEffect(() => {
        areaRef.current.focus();
    }, [activateSave]);

    return (
        <div className="about__me">
            <form>
                <div className="form__element">
                    <label htmlFor="about">About me</label>
                    <textarea ref={areaRef} disabled={!active && true} value={text} onChange={changeHandler} name="about" id="about" cols="30" rows="10" placeholder="Add some info about you..."></textarea>
                </div>
                {!active ? <button onClick={activateSave}>Change</button> :
                    <button className="update__button" onClick={send}>Update</button>
                }
            </form >
        </div >
    )
}

export default AboutMe
