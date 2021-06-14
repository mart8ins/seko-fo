import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faSmileWink } from '@fortawesome/free-solid-svg-icons';
import {faRss} from '@fortawesome/free-solid-svg-icons'

const content = {
    icon: <FontAwesomeIcon icon={faRss} />,
    type: "content"
}

const friends = {
    icon: <FontAwesomeIcon icon={faUserFriends} />,
    type: "friends"
}
const msg = {
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    type: "messages"
}
const news = {
    icon: <FontAwesomeIcon icon={faNewspaper} />,
    type: "news"
}
const jokes = {
    icon: <FontAwesomeIcon icon={faSmileWink} />,
    type: "relax"
}

const allIcons = [friends, msg, content, news, jokes];

export default allIcons;