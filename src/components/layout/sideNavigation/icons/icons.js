import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faSmileWink } from '@fortawesome/free-solid-svg-icons';

const blog = {
    icon: <FontAwesomeIcon icon={faBlog} />,
    type: "blogs"
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

const allIcons = [friends, msg, blog, news, jokes];

export default allIcons;