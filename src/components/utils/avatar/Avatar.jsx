import "./avatar.css"

/// TODO - create modal for image lookup

function Avatar({ image }) {
    return <div className="avatar-container">
        <img className="avatar" src={image} alt="user avatar" />
    </div>
}

export default Avatar;