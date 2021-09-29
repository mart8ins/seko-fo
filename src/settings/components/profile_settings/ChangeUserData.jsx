import React, { useState, useContext } from 'react';
import "./userData.css";
// CONTEXT
import { AuthContext } from "../../../context/auth-context";
// FETCH
import { changeProfileData } from "../../../fetch/users/profile";

// FORM VALIDATION
import formsValidator from "../../../utils/formComponents/formsValidator";

const ChangeUserData = () => {

    const { authData, setAuthData } = useContext(AuthContext); // authData.fullName is full name of user
    const name = authData.fullName.split(" "); // spliting name to firstName and lastName

    // state for profile data validation
    const [validForm, setValidForm] = useState({
        valid: undefined,
        message: ""
    });

    // state for profile data
    const [profileData, setProfileData] = useState({
        firstName: name[0],
        lastName: name[1],
        email: authData.email,
        update: false
    });

    // set profile data to be editable
    const changeFormEditable = (e) => {
        e.preventDefault();
        setProfileData({
            ...profileData,
            update: true
        })
    }

    // handle changes in profile data form
    const newDataHandler = (e) => {
        setProfileData({
            ...profileData,
            [e.target.name]: e.target.value
        })
    }

    // profile data form submit
    const sendProfileChanges = async (e) => {
        e.preventDefault();
        const { firstName, lastName, email } = profileData;

        const { valid, message } = formsValidator([{ type: "name", payload: firstName }, { type: "name", payload: lastName }, { type: "email", payload: email }])
        setValidForm({
            valid,
            message
        })
        if (valid) {
            const res = await changeProfileData(authData.token, profileData);

            if (!res.data.error) {
                // UPDATE CONTEXT
                setAuthData({
                    ...authData,
                    email: res.data.user.email,
                    fullName: res.data.user.firstName + " " + res.data.user.lastName
                });
                // UPDATE LOCAL STORAGE
                localStorage.setItem("authData", JSON.stringify({
                    ...authData,
                    email: res.data.user.email,
                    fullName: res.data.user.firstName + " " + res.data.user.lastName
                }))
                // SET FORM TO UNEDITABLE AGAIN
                setProfileData({
                    ...profileData,
                    update: false
                });
            } else {
                setValidForm({
                    valid: false,
                    message: res.data.error
                })
            }

        }
    }


    return (
        <form>
            {!validForm.valid ? <div className="validation__failed">{validForm.message}</div> : null}

            <fieldset disabled={profileData.update ? null : "disabled"} >
                <div className="form__element">
                    <label htmlFor="firstName">First name</label>
                    <input value={profileData.firstName} onChange={newDataHandler} type="text" name="firstName" required />
                </div>

                <div className="form__element">
                    <label htmlFor="lastName">Last name</label>
                    <input value={profileData.lastName} onChange={newDataHandler} type="text" name="lastName" required />
                </div>

                <div className="form__element">
                    <label htmlFor="email">Email</label>
                    <input value={profileData.email} onChange={newDataHandler} type="email" name="email" required />
                </div>
            </fieldset>

            {profileData.update ?
                <button className="update__button" onClick={sendProfileChanges}>Update</button>
                :
                <button onClick={changeFormEditable}>Change</button>
            }
        </form>
    )
}

export default ChangeUserData
