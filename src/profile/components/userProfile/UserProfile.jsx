import React from "react";
import { useParams } from "react-router";
import "./userProfile.css";
import { users } from "../../seed";


function UserProfile() {
    let { userId } = useParams();
    const [userData] = users.filter((user) => user.id == userId);
    console.log(userData);


    return <div>
        <div className="user__profile">
            <div className="user__profile__header">
                <div>
                    <img src={userData.photo} />
                    <h4>{`${userData.firstName} ${userData.lastName}`}</h4>
                </div>
            </div>
            <div>
                Kautkas
            </div>
        </div>


    </div>

}

export default UserProfile;