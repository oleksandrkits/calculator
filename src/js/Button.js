import React from "react";

class Button extends React.Component {
    render() {
        return (
            <button className={this.props.class} onClick={this.props.onClick}>
                {this.props.label}
            </button>
        );
    }
}

export default Button;