import React, { useState } from 'react';
import "./userData.css";



const UserData = () => {
    const [profileData, setProfileData] = useState({});


    return <div className="change__user__data">
        <form>
            <div className="form__element">
                <label htmlFor="firstName">First name</label>
                <input type="text" name="firstName" placeholder="Martins" required />
            </div>

            <div className="form__element">
                <label htmlFor="lastName">Last name</label>
                <input type="text" name="lastName" placeholder="Skinkis" required />
            </div>

            <div className="form__element">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="martins.skinkis@inbox.lv" required />
            </div>

            <button>Update</button>
        </form>

        <form >
            <div className="form__element">
                <label htmlFor="oldPassword">Old password</label>
                <input type="password" name="oldPassword" required />
            </div>


            <div className="form__element">
                <label htmlFor="newPassword">New password</label>
                <input type="password" name="newPassword" required />
            </div>

            <div className="form__element">
                <label htmlFor="repeatNewPassword">Repeat new password</label>
                <input type="password" name="repeatNewPassword" required />
            </div>
            <button>Change</button>
        </form>
    </div>
}

export default UserData;