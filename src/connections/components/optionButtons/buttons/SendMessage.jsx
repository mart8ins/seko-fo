import React, { useContext } from 'react';
import "../optionButtons.css";
import { MessageContext } from "../../../../context/message-context";

const SendMessage = ({ user, userId }) => {
    // message context to open message modal
    const { messageData, setMessageData } = useContext(MessageContext);
    const openMessageModal = () => {
        setMessageData({
            userId: userId,
            firstName: user.firstName,
            lastName: user.lastName,
            show: !messageData.show
        })
    }

    return (
        <button
            onClick={openMessageModal}
            className="card__user__options__btns">
            Send message
        </button>
    )
}

export default SendMessage