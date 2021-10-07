import React, { useState, useRef, useEffect, useContext } from 'react';
import { AuthContext } from "../../context/auth-context";
import "./profilePhotoPicker.css";
import globalVariables from "../../globalVariables";

import { changeProfilePhoto } from "../../fetch/profile";


const ProfilePhotoPicker = () => {
    const { authData, setAuthData } = useContext(AuthContext);
    const filePickerRef = useRef();

    // state for users photo from db
    const [existingImage, setExistingImage] = useState(false);

    // state for picked new image / handler
    const [pickedPhoto, setPickedPhoto] = useState(false);

    // state for new images preview, set after picking image and parsing with FileReader
    const [photoPreview, setPhotoPreview] = useState();

    // state for buttons if picked image is saved
    const [photoSaved, setPhotoSaved] = useState(false);

    // reference to input filed with type file and event handler
    const openPhotoWindow = () => {
        filePickerRef.current.click();
    }

    // store picked file
    const photoHandler = (e) => {
        if (e.target.files || e.target.files.length === 1) {
            const photo = e.target.files[0];
            setPickedPhoto(photo);
            setPhotoSaved(false);
        }
    }

    // effect for FileReader
    useEffect(() => {
        if (pickedPhoto) {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                setExistingImage(false);
                setPhotoPreview(fileReader.result) // onload - > as soon as photo is read, onload callback, result will be in result propertie of fileReader
            }
            fileReader.readAsDataURL(pickedPhoto); // read photo
        }
    }, [pickedPhoto]);


    useEffect(() => {
        if (authData.profilePhoto) {
            setExistingImage(authData.profilePhoto);
        }
    }, [authData]);


    // send photo to backend
    const savePhoto = async () => {
        const fd = new FormData();
        fd.append("profile_photo", pickedPhoto); // to enable/convert to enctype="multipart/form-data"
        const res = await changeProfilePhoto(authData.token, fd);

        setAuthData({
            ...authData,
            profilePhoto: res.data.photo
        });
        // UPDATE LOCAL STORAGE
        localStorage.setItem("authData", JSON.stringify({
            ...authData,
            profilePhoto: res.data.photo
        }))
        setPhotoSaved(true);
    }

    return <div className="change__image">
        <div className="image__container">
            <input ref={filePickerRef} name="profile_photo" onChange={photoHandler} style={{ display: "none" }} type="file" accept=".jpg,.png,.jpeg" />
            <img
                src={existingImage && globalVariables.server + existingImage || photoPreview || `./images/no_image.png`}
                alt="Photo preview" />
        </div>
        <div className="image__buttons__container">
            {!photoPreview || photoSaved ?
                <button onClick={openPhotoWindow}>Choose</button>
                :
                <button className="save__button" onClick={savePhoto}>Save photo</button>
            }
        </div>
    </div>
}

export default ProfilePhotoPicker;
