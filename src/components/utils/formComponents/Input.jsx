import React from "react";

const Input = (props) => {
    return <input type={props.type} name={props.name} id={props.id} placeholder={props.placeholder} value={props.value} />
}

export default Input;