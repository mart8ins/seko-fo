import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // react font awesome component

import { faRssSquare } from '@fortawesome/free-solid-svg-icons'; // main feed
import { faFileMedicalAlt } from '@fortawesome/free-solid-svg-icons'; // create
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // message
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'; // friends
import { faCogs } from '@fortawesome/free-solid-svg-icons'; // settings

// content / feed 
const content = {
    icon: <FontAwesomeIcon icon={faRssSquare} />,
    type: "content"
}

// create 
const create = {
    icon: <FontAwesomeIcon icon={faFileMedicalAlt} />,
    type: "create"
}

// message
const msg = {
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    type: "messages"
}

// connections
const connections = {
    icon: <FontAwesomeIcon icon={faUserFriends} />,
    type: "connections"
}

// settings
const settings = {
    icon: <FontAwesomeIcon icon={faCogs} />,
    type: "settings"
}

// 0 index at the top of side navigation... and so one...
const allIcons = [content,create, msg, connections, settings];

export default allIcons;