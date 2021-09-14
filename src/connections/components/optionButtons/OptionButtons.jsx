import React from 'react';
import "./optionButtons.css";

// BUTTONS
import ViewProfile from "./buttons/ViewProfile";
import SendMessage from "./buttons/SendMessage";
import RequestConnection from "./buttons/RequestConnection";
import AcceptConnection from "./buttons/AcceptConnection";
import RequestSent from "./buttons/RequestSent";

const OptionButtons = ({ user, connected, userSentRequest, userRecievedRequest }) => {
    const userId = String(user._id);

    return (
        <div className="buttons__container">
            <ViewProfile userId={userId} />
            <SendMessage user={user} userId={userId} />

            {!connected && !userSentRequest && !userRecievedRequest && <RequestConnection userId={userId} />}

            {userSentRequest && <AcceptConnection userId={userId} />}
            {userRecievedRequest && <RequestSent />}


        </div>
    )
}

export default OptionButtons
