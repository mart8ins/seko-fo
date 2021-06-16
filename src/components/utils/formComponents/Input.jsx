import React from "react";

const Input = (props) => {
    return <input onChange={props.onChange} type={props.type} name={props.name} id={props.id} placeholder={props.placeholder} value={props.value} value={props.value} required={props.required} />
}

export default Input;