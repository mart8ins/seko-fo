import React from 'react'

const CommentsSection = ({ comments_allowed }) => {
    return (
        <div className="user__story__comments__container">
            {comments_allowed ?
                <div className="user__story__comments__open">
                    comenti
                </div> :
                <div className="user__story__comments__locked">
                    Comments are locked for this Story
                </div>}
        </div>
    )
}

export default CommentsSection
