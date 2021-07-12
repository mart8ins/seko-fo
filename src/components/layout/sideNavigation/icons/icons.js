import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // react font awesome component

import { faFileMedicalAlt } from '@fortawesome/free-solid-svg-icons'; // create
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // message
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'; // friends
import { faCogs } from '@fortawesome/free-solid-svg-icons'; // settings

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

// friends
const friends = {
    icon: <FontAwesomeIcon icon={faUserFriends} />,
    type: "friends"
}

// settings
const settings = {
    icon: <FontAwesomeIcon icon={faCogs} />,
    type: "settings"
}

// 0 index at the top of side navigation... and so one...
const allIcons = [create, msg, friends, settings];

export default allIcons;