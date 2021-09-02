import React, { useContext, useEffect } from "react";
import "./messages.css";
import { v4 as uuidv4 } from 'uuid';
import { ConnectionsContext } from "../../context/connections-context";



function Messages() {
    const { connectedWith } = useContext(ConnectionsContext);

    const renderConnectedContacts = (contact) => {
        return <div className="contact">
            <p>{contact.firstName} {contact.lastName}</p>
            <img width="70px" src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" alt="" />
        </div>
    }

    return <div className="main__container">
        <div className="left__side__contacts">
            {connectedWith.length && connectedWith.map(renderConnectedContacts)}
        </div>
        <div className="right__side__messages">
            <div className="see__messages">
                messages
            </div>
            <div className="send__messages">
                send message
            </div>
        </div>
    </div>

}

export default Messages;