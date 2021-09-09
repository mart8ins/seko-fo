import React, { useState, useContext } from 'react';
import "./userData.css";
// CONTEXT
import { AuthContext } from "../../../context/auth-context";
// FETCH
import { changeProfilePassword } from "../../../fetch/users/profile";

const ChangePassword = () => {
    const { authData } = useContext(AuthContext);

    const [passwords, setPasswords] = useState({
        oldPassword: "",
        newPassword: "",
        repeatNewPassword: ""
    });
    const [message, setMessage] = useState("");

    const handlePasswords = (e) => {
        setPasswords({
            ...passwords,
            [e.target.name]: e.target.value
        })
    };

    const sendPasswordChange = async (e) => {
        e.preventDefault();
        const res = await changeProfilePassword(authData.token, passwords);
        if (res.data.error) {
            setMessage(res.data.error)
        } else {
            setMessage(res.data.message);
            setPasswords({
                oldPassword: "",
                newPassword: "",
                repeatNewPassword: ""
            });
        }
    }

    return (
        <form>
            <div className="validation__failed">{message ? message : null}</div>
            <div className="form__element">
                <label htmlFor="oldPassword">Old password</label>
                <input onChange={handlePasswords} value={passwords.oldPassword} type="password" name="oldPassword" required />
            </div>


            <div className="form__element">
                <label htmlFor="newPassword">New password</label>
                <input onChange={handlePasswords} value={passwords.newPassword} type="password" name="newPassword" required />
            </div>

            <div className="form__element">
                <label htmlFor="repeatNewPassword">Repeat new password</label>
                <input onChange={handlePasswords} value={passwords.repeatNewPassword} type="password" name="repeatNewPassword" required />
            </div>
            <button onClick={sendPasswordChange}>Change</button>
        </form>
    )
}

export default ChangePassword
