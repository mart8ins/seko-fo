import React, { useContext, useState, useEffect, useRef } from "react";
import "./messages.css";
import { v4 as uuidv4 } from 'uuid';
import { ConnectionsContext } from "../context/connections-context";
import { AuthContext } from "../context/auth-context";
import socket from "../socket/socket";
import formsValidator from "../utils/formComponents/formsValidator";



function Messages() {
    const { authData } = useContext(AuthContext);
    const { connectedWith, notConnectedButMessages } = useContext(ConnectionsContext);
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        setAllUsers([...connectedWith, ...notConnectedButMessages]);
    }, [connectedWith, notConnectedButMessages]);

    const [room, setRoom] = useState(undefined);
    // textarea message state
    const [messageText, setMessageText] = useState("");

    // conversation with user
    const [messages, setMessages] = useState([]);

    // ref for auto scroll after new message
    const messageContainerRef = useRef();


    // searched and found users (only full names)
    const [foundUsers, setFoundUsers] = useState([]);

    // active/selected user for messages
    const [activeUser, setActiveUser] = useState(undefined);

    // search input to find user to start conversation with, search only for full names
    const searchInputHandler = (e) => {
        const searchValue = e.target.value;
        const found = allUsers.filter((user) => {
            return user.firstName.toLowerCase() === searchValue.toLowerCase() || user.lastName.toLowerCase() === searchValue.toLowerCase();
        })
        setFoundUsers(found);
    };

    // set active user after clicking found users
    const chooseActiveUser = (contact) => {
        setActiveUser({
            ...contact,
            userId: contact._id
        });
    };

    // border-left: 5px solid rgb(40, 207, 40);
    // border-left: 5px solid rgb(207, 40, 40);


    // for large display render all contacts
    const renderConnectedContacts = (contact) => {
        const userId = String(contact._id);
        const image = contact.photo && contact.photo.profile || "/images/no_image.png";
        return <div key={uuidv4()} style={contact.isConnected ? { borderLeft: "6px solid rgb(69, 187, 69)" } : { borderLeft: "6px solid rgb(177, 72, 72)" }} onClick={() => chooseActiveUser(contact)} className={`contact ${activeUser && activeUser.userId === userId && "activeUser"}`}>
            <p>{contact.firstName} {contact.lastName}</p>
            <img src={image} alt={contact.firstName + contact.lastName} />
        </div>
    };

    // create socket connection with explored user / join room, room is convrsation id
    useEffect(() => {
        if (activeUser) {
            socket.emit("ACTIVE USER", { loggedUser: authData.userId, exploredUser: activeUser.userId }, (conversation, room) => {
                setMessages([...conversation]);
                setRoom(room);
            });
        }
    }, [activeUser]);

    const messageTextHandler = (e) => {
        setMessageText(e.target.value);
    };

    const sendMessage = (e) => {
        e.preventDefault();
        const { valid } = formsValidator([{ type: "message", payload: messageText }]);

        if (valid) {
            const newMsg = {
                text: messageText,
                sent: true,
                senderId: authData.userId,
                recieverId: activeUser.userId,
                room: room
            }
            socket.emit("SEND MESSAGE", { message: newMsg, room: room });
            setMessages([...messages, newMsg]);
            setMessageText("");
        }
    };

    useEffect(() => {
        socket.on("RECIEVE MESSAGE", (message) => {
            setMessages([...messages, { text: message.text, sent: false }]);
        })
    });

    // SCROLL TO BOTTOM FUNCTION USING USEREF
    const scrollToBottom = () => {
        messageContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        scrollToBottom();
    }, [messages]);


    return <div className="main__container">

        <div className="left__side__sm">
            <div className="search__contact">
                <input onChange={searchInputHandler} type="text" placeholder="Search contact..." />
            </div>
            {
                allUsers.length ?
                    <div className="contacts__container__sm">
                        {foundUsers.length && foundUsers.map(renderConnectedContacts) || allUsers.length && allUsers.map(renderConnectedContacts)}
                    </div> :
                    <div>
                        No conected users to show
                    </div>
            }
        </div>

        <div className="left__side__lg">
            <div className="search__contact">
                <input onChange={searchInputHandler} type="text" placeholder="Search contact..." />
            </div>
            <div className="contacts__container__lg">
                {
                    allUsers.length ?
                        <div className="contacts__container__lg">
                            {foundUsers.length && foundUsers.map(renderConnectedContacts) || allUsers.length && allUsers.map(renderConnectedContacts)}
                        </div> :
                        <div>
                            No conected users to show
                        </div>
                }
            </div>
        </div>

        {activeUser ?
            <div className="right__side">
                <p className="contact__name"><span style={{ color: "red", fontSize: "0.6rem" }}>{!activeUser.isConnected && "not connected"}</span> {activeUser.firstName} {activeUser.lastName}</p>
                <div className="see__messages">
                    {messages.map((msg) => {
                        return <div key={uuidv4()} ref={messageContainerRef} className={msg.sent ? "sent" : "recieved"}>
                            {msg.text}
                        </div>
                    })}
                </div>
                <div className="send__messages">
                    <textarea onChange={messageTextHandler} value={messageText} placeholder="Send message..."></textarea>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
            :
            <div className="right__side">
                <div className="user__not__selected">Please select user to start conversation and see messages</div>
            </div>
        }
    </div>

}

export default Messages;