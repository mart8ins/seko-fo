import React, { useState } from "react";
import "./request.css";
import { v4 as uuidv4 } from 'uuid';
import ConnectionCard from "../connectionCard/ConnectionCard";

const Request = ({ requests }) => {
    const [recieved, setRecieved] = useState(requests.recieved);
    const [sent, setSent] = useState(requests.sent);
    console.log(recieved)
    return (
        <div>You got incoming requests! {recieved.length}</div>
    )
}

export default Request;