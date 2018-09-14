import React from "react";
import Button from "./Button";
import Screen from "./Screen";
import DataInput from "./DataInput";

class BMI extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            digits: '',
            operation: '',
            lhs: '',
        }
    }
    handleDigitClick(value){
        let digits = this.state.digits;
        if (digits.length < 15) {
            digits += value.toString();
            this.setState({digits: digits});
        }
    }
    handleClearClick(){
        this.setState({
            digits: '',
            operation: '',
            lhs: null,
        });

    }

    handleOperationClick(operation){

    }
    renderDataInput(label) {
        return <DataInput label={label} />;
    }
    renderScreen(digits) {
        return <Screen digits={digits} />;
    }
    // renderButton(label) {
    //     <Button/>
    // }
    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderScreen(this.state.digits)}
                </div>
                <div className="board-row">
                    {this.renderDataInput('kg')}
                </div>
                <div className="board-row">
                    {this.renderDataInput('cm')}
                </div>
                {/*<div className="board-row">*/}
                    {/*{this.renderButton('evaluate')}*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default BMI