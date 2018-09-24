import React from "react";
import Label from "./Label";
import Input from "./Input";

class InputBlock extends React.Component {

    renderLabel(label){
        return <Label label={label}/>
    }

    renderInput(onValueChange){
        return <Input onValueChange={onValueChange}/>
    }

    render() {
        return (
            <div>
                {this.renderInput(this.props.onValueChange)}
                {this.renderLabel(this.props.label)}
            </div>
        );
    }
}

export default InputBlock;