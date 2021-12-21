import React, { useState, useContext, useEffect } from 'react';
import "./userCardForTypeBox.css";
import { AuthContext } from '../../../../../../../../../context/auth-context';
import { fetchUser } from "../../../../../../../../../fetch/connections";
import globalVariables from '../../../../../../../../../globalvar';

const UserCardForTypeBox = ({ authorId, firstName, lastName }) => {
    const { authData: { token } } = useContext(AuthContext);
    const [authorImage, setAuthorImage] = useState("/images/no_image.png")

    useEffect(() => {
        gethUser();
    }, [authorId]);

    const gethUser = async () => {
        const res = await fetchUser(token, authorId);
        if (res.data.user.photo.profile) {
            setAuthorImage(globalVariables.server + res.data.user.photo.profile);
        }
    }

    return (
        <div className="content__feed__type__box__bottom">
            <p>{firstName + " " + lastName}</p>
            <img src={authorImage} alt={firstName + " " + lastName} />
        </div>
    )
}

export default UserCardForTypeBox
