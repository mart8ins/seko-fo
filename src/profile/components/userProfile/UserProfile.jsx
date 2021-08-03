import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import "./userProfile.css";
import { getUser, getUsersConnections } from "../../../fetch/users/users";
import { AuthContext } from "../../../context/auth-context";


function UserProfile() {
    const { authData } = useContext(AuthContext);

    // state for if user is connected with explored user
    const [isConnected, setIsConnected] = useState(false);

    // explored user id and state for user
    let { userId } = useParams();
    const [exploredUser, setExploredUser] = useState({});
    const [exploredUserRecievedRequests, setExploredUserRecievedRequests] = useState([]);
    const [exploredUserSentRequests, setExploredUserSentRequests] = useState([]);


    // explored users buttons state - REQUEST SENT AND ACCEPT REQUEST
    const [requestIsSent, setRequestIsSent] = useState(false);
    const [requestIsRecieved, setRequestIsRecieved] = useState(false);

    // fetch logged users connections and retrieve connected array
    const [logedUserConnections, setLogedUserConnections] = useState([]);
    const getUsersConnectionsData = async () => {
        const response = await getUsersConnections(authData.userId, authData.token);
        setLogedUserConnections(response.data.connections.connected);
    }
    // fetch explored user all data
    const getUserData = async () => {
        const response = await getUser(userId, authData.token);
        setExploredUser(response.data.user);
        setExploredUserRecievedRequests(response.data.user.connections.requests.recieved);
        setExploredUserSentRequests(response.data.user.connections.requests.sent);
    }

    // fecth data
    useEffect(() => {
        getUserData();
        getUsersConnectionsData();
    }, [userId])

    // to check if explored user is connected with logged user
    useEffect(() => {
        const checkConnection = logedUserConnections.filter((user) => {
            return String(user.userId) === String(userId);
        })
        checkConnection[0] ? setIsConnected(true) : setIsConnected(false);
    }, [logedUserConnections, userId])

    useEffect(() => {
        setRequestIsSent(exploredUserSentRequests.some((user) => String(user.userId) === String(authData.userId)))
    }, [exploredUserSentRequests, authData.userId]);

    useEffect(() => {
        setRequestIsRecieved(exploredUserRecievedRequests.some((user) => String(user.userId) === String(authData.userId)))
    }, [exploredUserRecievedRequests, authData.userId]);




    console.log(requestIsSent, requestIsRecieved)
    return <div>
        <div className="user__profile">
            <div className="connected__status">
                {isConnected ? <div className="connected__status__true">Connected</div> : <div className="connected__status__false">Not connected</div>}
            </div>
            <div className="user__profile__data">
                <div className="user__profile__header">
                    <div>
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
                <button className="user__profile__options__btns">New msg</button>
                {isConnected && <button className="user__profile__options__btns">Remove from connections</button>}

                {!isConnected && !requestIsRecieved && !requestIsSent ? <button className="user__profile__options__btns">Request connection</button> : null}
                {!isConnected && requestIsRecieved && <button className="user__profile__options__btns request__sent">Request sent</button>}
                {!isConnected && requestIsSent && <button className="user__profile__options__btns request__pending">Accept request</button>}

            </div>


            <div className="user__profile__content">
                Content
            </div>
        </div>


    </div>

}

export default UserProfile;