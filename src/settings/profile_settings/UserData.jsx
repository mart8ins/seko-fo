import React from 'react';
import "./userData.css";
//COMPONENTS
import ChangePassword from "./ChangePassword";
import ChangeUserData from "./ChangeUserData";



const UserData = () => {
    return <div className="change__user__data">
        <ChangeUserData />
        <ChangePassword />
    </div>
}

export default UserData;