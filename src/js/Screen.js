import React from "react";
import '../css/Screen.css';

function Screen(props) {

    return (
        <div className='screen'>
            {props.value}
        </div>
    );
}

export default Screen