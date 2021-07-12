import React from "react";
import "./profile.css";
import Avatar from "../../utils/avatar/Avatar";

const user = {
    image: "https://images.unsplash.com/photo-1543967480-0c5062b30c83?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
}



function Profile() {
    return <div className="user__profile">
        <div className="user__profile__header">
            <Avatar image={user.image} />
            <div>
                Martins
            </div>
            <div>
                Kautkas
            </div>
        </div>
        <div>
            Profile
        </div>
    </div>

}

export default Profile;