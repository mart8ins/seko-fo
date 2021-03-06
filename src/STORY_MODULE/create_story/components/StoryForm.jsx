import React, { useContext, useState, useEffect, useRef } from 'react';
import { useHistory } from "react-router-dom";

import "./storyForm.css";
import { postStory } from '../../../fetch/story';
import { AuthContext } from "../../../context/auth-context";
import { StoryContext } from "../../../context/story-context";
import queryString from 'query-string';
import { getStory } from "../../../fetch/story";
import axios from "axios";

// FORM VALIDATOR
import formsValidator from "../../../utils/formComponents/formsValidator";

const StoryForm = () => {
    // CONTEXTS
    const { authData } = useContext(AuthContext);
    const { fetchAllStories } = useContext(StoryContext);

    // FORM STATE
    const [formState, setFormState] = useState({
        title: "",
        story: "",
        image: undefined,
        private: false,
        comments_allowed: true
    });

    const [savingInProgress, setSavingInProgress] = useState(false);
    const [buttonIsActive, setButtonIsActive] = useState(false);

    // STATE FOR STORY FORMS VALIDATION ERRORS
    const [validForm, setValidForm] = useState({
        valid: false,
        message: ""
    });

    // IMAGE UPLOAD/ PREVIEW HANDLER
    const imagePickerRef = useRef();
    const [pickedImage, setPickedImage] = useState(undefined);
    const [imagePreview, setImagePreview] = useState(undefined);


    /* 
    USING STORY CREATION COMPONENT ALSO TO EDIT IT IF USER CLICKS EDIT BUTTON IN STORY PAGE,
    USER MOVED TO COMPONENT AND FORM VALUE RECIEVED FROM DB
    */

    const [editStory, setEditStory] = useState(false);
    const [storyToEditId, setStoryToEditId] = useState(undefined);
    const history = useHistory();

    // EFFECT TO CHECK IF USER WHANTS TO CREATE OR EDIT STORY
    useEffect(() => {
        const { edit } = queryString.parse(history.location.search);
        // if query string name edit exists (story id) then set state for component for edit story
        // EDIT = story id
        if (edit) {
            setStoryToEditId(edit);
            (async () => {
                const res = await getStory(authData.token, edit);
                setFormState({
                    title: res.data.story.title,
                    story: res.data.story.story,
                    image: res.data.story.image ? res.data.story.image : undefined,
                    private: res.data.story.private,
                    comments_allowed: res.data.story.comments_allowed
                });
            })();
            setEditStory(true);
        }
    }, [authData.token, history.location.search]);

    // EFFECT FOR IMAGE UPLOAD
    useEffect(() => {
        if (pickedImage) {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                setImagePreview(fileReader.result);
            }
            fileReader.readAsDataURL(pickedImage)
        }
        // if(edit && formState.image) {
        //     setImagePreview(formState.image)
        // }
    }, [pickedImage])

    // HANDLE FORMS TEXT
    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    // HANDLE FORMS CHECKBOXES
    const handleChecked = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.checked
        })
    }

    // HANDLE IMAGE PICKER
    const handleImagePicker = (e) => {
        if (e.target.files && e.target.files.length === 1) {
            setPickedImage(e.target.files[0]);
            setFormState({
                ...formState,
                image: e.target.files[0]
            })
        }
    }

    // OPEN IMAGE PICKER
    const choseImage = () => {
        imagePickerRef.current.click();
    }

    useEffect(() => {
        if (formState.title.length > 5 && formState.story.length > 50) {
            setButtonIsActive(true);
        }
    }, [formState])

    const submitForm = async (e) => {
        e.preventDefault();
        setSavingInProgress(true);
        const { valid, message } = formsValidator(
            [{ type: "title", payload: formState.title },
            { type: "story", payload: formState.story }]
        );
        setValidForm({
            valid,
            message
        });

        if (valid) {
            const imageData = new FormData();
            const formData = new FormData();

            if (pickedImage) {
                imageData.append("file", pickedImage);
                imageData.append("upload_preset", "mycvapp");
                imageData.append("cloud_name", "elementi");
                const res = await axios.post(`https://api.cloudinary.com/v1_1/elementi/image/upload`, imageData);
                setSavingInProgress(false);
                formData.append("image", res.data.secure_url || formState.image);
            }

            formData.append("title", formState.title);
            formData.append("story", formState.story);
            formData.append("private", formState.private);
            formData.append("comments_allowed", formState.comments_allowed);

            if (editStory) {
                formData.append("edit_story", storyToEditId);
                formData.append("image", formState.image);
            }

            await postStory(authData.token, formData);

            setValidForm({
                valid: undefined,
                message: ""
            })

            setFormState({
                title: "",
                story: "",
                image: undefined,
                private: false,
                comments_allowed: true
            });
            setPickedImage(undefined);
            setImagePreview(undefined);
            fetchAllStories();
            setEditStory(false);
            setButtonIsActive(false);
            setSavingInProgress(false);
        }
        // else {
        //     setValidForm({
        //         valid,
        //         message
        //     })
        // }
    }

    return (
        <div className="new__story__container">
            <h2>{editStory ? "Edit story" : "Tell a story..."}</h2>
            {!validForm.valid ? <p className="story__form__invalid">{validForm.message}</p> : null}
            <form>
                <input
                    onChange={handleChange}
                    className="new__story__title"
                    type="text" name="title"
                    value={formState.title} placeholder="Title at least 5 characters long..." required />

                <div className="new__story__text__image">
                    <textarea
                        onChange={handleChange}
                        placeholder="Story must be at least 50 characters long..."
                        value={formState.story}
                        name="story"
                        required></textarea>

                    <div className="new__story__image">
                        <input
                            ref={imagePickerRef}
                            onChange={handleImagePicker}
                            className="new__story__image__input"
                            type="file"
                            name="image" />
                        <div className="add__image" onClick={choseImage}>
                            {editStory ? "Change image" : "Add image"}
                        </div>
                        <div className="image__preview">
                            {imagePreview && <img alt="story preview" src={imagePreview} />}
                            {editStory && formState.image && !imagePreview && <img alt={formState.image} src={formState.image} />}
                            {!imagePreview && !formState.image && "Image preview"}
                        </div>
                    </div>
                </div>

                <div className="new__story__options">

                    <label className="check__container" htmlFor="private">
                        <input
                            onChange={handleChecked}
                            name="private"
                            id="private"
                            type="checkbox"
                            checked={formState.private}
                            value={formState.private}
                        />
                        <span className={`private ${formState.private && "private__checked"}`}>Private {!formState.private && "?"} <span className={`check_mark ${formState.private && "check_mark_checked"}`}>&#10003;</span></span>
                    </label>

                    <label className="check__container" htmlFor="comments_allowed">
                        <input
                            onChange={handleChecked}
                            name="comments_allowed"
                            id="comments_allowed"
                            type="checkbox"
                            checked={formState.comments_allowed}
                            value={formState.comments_allowed} />
                        <span className={`comments ${formState.comments_allowed && "comments__checked"}`}>Comments {!formState.comments_allowed && "?"} <span className={`check_mark ${formState.comments_allowed && "check_mark_checked"}`}>&#10003;</span></span>
                    </label>
                </div>

                {
                    buttonIsActive &&
                    <button className="story__submit__btn" onClick={submitForm}>
                        {
                            !savingInProgress && buttonIsActive && "Save" || savingInProgress && "Saving..."
                        }
                    </button>
                }

            </form>
        </div>


    )
}

export default StoryForm
