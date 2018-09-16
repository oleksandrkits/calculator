import React from "react";

class Screen extends React.Component {
    render() {
        return (
            <div className={this.props.class} >
                {this.props.value}
            </div>
        );
    }
}

export default Screen;