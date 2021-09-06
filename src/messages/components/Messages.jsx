import React, { useContext, useState } from "react";
import "./messages.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuidv4 } from 'uuid';
import { ConnectionsContext } from "../../context/connections-context";



function Messages() {
    // list of all conected users
    const { connectedWith } = useContext(ConnectionsContext);

    // searched and found users (only full names)
    const [foundUsers, setFoundUsers] = useState([]);

    // active/selected user for messages
    const [activeUser, setActiveUser] = useState(undefined);

    // search input to find user to start conversation with, search only for full names
    const searchInputHandler = (e) => {
        const searchValue = e.target.value;
        const found = connectedWith.filter((user) => {
            return user.firstName.toLowerCase() === searchValue.toLowerCase() || user.lastName.toLowerCase() === searchValue.toLowerCase();
        })
        setFoundUsers(found);
    }

    // set active user after clicking found users
    const chooseActiveUser = (contact) => {
        setActiveUser(contact);
    }

    // for large display render all contacts
    const renderConnectedContacts = (contact) => {
        return <div onClick={() => chooseActiveUser(contact)} className={`contact ${activeUser && activeUser.userId === contact.userId && "activeUser"}`}>
            <p>{contact.firstName} {contact.lastName}</p>
            <img src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" alt="" />
        </div>
    }


    return <div className="main__container">
        <div className="left__side__sm">
            <div className="search__contact">
                <input onChange={searchInputHandler} type="text" placeholder="Search contact..." />
            </div>

            <div className="contacts__container__sm">
                {foundUsers.length && foundUsers.map(renderConnectedContacts) || connectedWith.length && connectedWith.map(renderConnectedContacts)}
                {/* {
                    activeUser ?
                        <div className="contact">
                            <p>{activeUser.firstName} {activeUser.lastName}</p>
                            <img src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" alt="" />
                        </div> :
                        <div className="contact">
                            <p>User</p>
                            <div className="no__user__icon">
                                <FontAwesomeIcon icon={faUser} />
                            </div>

                        </div>
                } */}
            </div>
        </div>

        <div className="left__side__lg">
            <div className="search__contact">
                <input onChange={searchInputHandler} type="text" placeholder="Search contact..." />
            </div>

            <div className="contacts__container__lg">
                {foundUsers.length && foundUsers.map(renderConnectedContacts) || connectedWith.length && connectedWith.map(renderConnectedContacts)}
            </div>
        </div>




        {activeUser ?
            <div className="right__side">
                <p className="contact__name">{activeUser && activeUser.firstName} {activeUser && activeUser.lastName}</p>
                <div className="see__messages">
                    messages
                </div>
                <div className="send__messages">
                    <textarea placeholder="Send message..."></textarea>
                    <button>Send</button>
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