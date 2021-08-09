import React, { useContext } from "react";
import { MessageContext } from "../../../../../context/message-context";


// 
const AboutUser = ({ exploredUser, isConnected, isRequestRecieved, isRequestSent, acceptRequest, sendRequest }) => {
    console.log(exploredUser)
    const { messageModalContext, setMessageModalContext } = useContext(MessageContext);

    const openMessageModal = () => {
        setMessageModalContext({
            userId: exploredUser._id,
            firstName: exploredUser.firstName,
            lastName: exploredUser.lastName,
            show: !messageModalContext.show
        })
    }


    return <div>
        <div className="user__profile">
            <div className="connected__status">
                {isConnected ? <div className="connected__status__true">Connected</div> : <div className="connected__status__false">Not connected</div>}
            </div>
            <div className="user__profile__data">
                <div className="user__profile__header">
                    <div className="user__profile__photo__name">
                        <img alt="User" src={exploredUser.photo || "https://images.unsplash.com/photo-1514588645531-00b8822ad997?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"} />
                        <h4>{`${exploredUser.firstName} ${exploredUser.lastName}`}</h4>
                    </div>
                </div>
                <div className="user__profile__bio">
                    <h3 className="about__me__heading">About me</h3>
                    <p className="about__me__text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
            </div>

            <div className="user__profile__options__btns__container">
                <button onClick={openMessageModal} className="user__profile__options__btns">Send message</button>
                {isConnected && <button className="user__profile__options__btns request__remove">Remove from connections</button>}

                {!isConnected && !isRequestRecieved && !isRequestSent ? <button onClick={sendRequest} className="user__profile__options__btns">Request connection</button> : null}
                {!isConnected && isRequestSent && <button className="user__profile__options__btns request__sent">Request sent</button>}
                {!isConnected && isRequestRecieved && <button onClick={acceptRequest} className="user__profile__options__btns request__pending">Accept request</button>}
            </div>
        </div>
    </div>
}

export default AboutUser;