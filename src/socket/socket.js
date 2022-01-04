import socketClient from "socket.io-client";
import globalVariables from "../globalvar";
// const ENDPOINT = "http://localhost:3002/";
const ENDPOINT = globalVariables.server;
const socket = socketClient(ENDPOINT);

export default socket;