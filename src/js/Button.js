import React from "react";
import '../css/Button.css';

function Button(props) {
    const className = `square ${props.style}`;
    return (
        <button className={className} onClick={() => props.onClick()}>
            {props.value}
        </button>
    );
}

export default Button