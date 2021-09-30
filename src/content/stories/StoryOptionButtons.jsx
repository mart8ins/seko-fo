import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from '../../context/auth-context';
import { StoryContext } from '../../context/story-context';

import { deleteStory } from "../../fetch/users/story";

const StoryOptionButtons = ({ storyId }) => {
    const { fetchAllStories } = useContext(StoryContext);
    const { authData } = useContext(AuthContext);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const history = useHistory();

    const deletePreview = () => {
        setConfirmDelete(true);
    }

    const deleteComplete = async () => {
        const res = await deleteStory(authData.token, storyId);
        await fetchAllStories();
        history.push("/userContentFeed");
    }

    useEffect(() => {
        if (confirmDelete) {
            setTimeout(() => {
                setConfirmDelete(false);
            }, 10000)
        }
    }, [confirmDelete])

    return (
        <div className="user__story__options__btns">
            {!confirmDelete && <button onClick={deletePreview} to="">Delete</button>}

            {confirmDelete && <button onClick={deleteComplete} className="confirm__deletion__btn" to="">Confirm deletion</button>}

            <Link to="">Edit</Link>
            <Link to="/userContentFeed?type=story">View all my stories</Link>
        </div>
    )
}

export default StoryOptionButtons
