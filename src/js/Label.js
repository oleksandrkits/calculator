import React from "react";

class Label extends React.Component {
    render() {
        return (
            <label >{this.props.label}</label>
        );
    }
}

export default Label;