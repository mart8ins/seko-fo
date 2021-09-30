import React, { useState } from 'react'

const StoryRater = () => {
    const [rating, setRating] = useState(1);

    const changeHandler = (e) => {
        setRating(e.target.value)
    }

    return (
        <div className="user__story__rater">
            <p>Rate this story</p>
            <p className="user__story__rater__value">{rating}</p>
            <input onChange={changeHandler} value={rating} id="rate" name="rate" type="range" step="1" min="1" max="10" />
            <button>Submit</button>
        </div>
    )
}

export default StoryRater
