import React, { useState } from 'react';
import "./photo.css";



const Photo = () => {
    // state for button to add photo if it is not added or change if it is
    const [isPhoto, setIsPhoto] = useState(true);

    return <div className="change__image">
        <div className="image__container">
            <img src="https://images.unsplash.com/photo-1631093376635-84273a533168?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" />
        </div>
        <div className="image__buttons__container">
            {isPhoto ?
                <button>Change</button>
                :
                <button>Add</button>
            }
        </div>
    </div>
}

export default Photo;
