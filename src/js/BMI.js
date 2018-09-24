import React from "react";
import Button from "./Button";
import Screen from "./Screen";
import InputBlock from "./InputBlock";

class BMI extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            bmi_value: '',
            kg: null,
            cm: null,
        };
    }
    handleCalculateClick(){
        let cm = this.state.cm;
        let kg = this.state.kg;

        cm = this.validateInputParams(cm);
        kg = this.validateInputParams(kg);

        cm = this.centimeterToMeter(cm);

        const bmi_value = kg / cm ** 2;
        this.setState({bmi_value: bmi_value.toFixed(2)});
    }

    centimeterToMeter(cm){
        return cm/100;
    }

    validateInputParams(param){
        try {
            return parseInt(param)
        }
        catch (e) {
            this.setState({bmi_value: 'Wrong input'})
        }
    }

    handleWeightInput = e => this.setState({kg: e.target.value});
    handleHeightInput = e => this.setState({cm: e.target.value});

    renderInputBlock(label, onChange){
        return <InputBlock label={label} class={'square'} onValueChange={onChange} />;
    }
    renderButton(label) {
        return <Button value={label}
                       style={'double'}
                       onClick={() => this.handleCalculateClick()}
        />;
    }
    renderScreen(label) {
        return <Screen value={label} class={'screen'} />;
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderScreen(this.state.bmi_value)}
                </div>
                <div className="board-row">
                    {this.renderInputBlock('kg', this.handleWeightInput)}
                </div>
                <div className="board-row">
                    {this.renderInputBlock('cm', this.handleHeightInput)}
                </div>
                <div className="board-row">
                    {this.renderButton("Calculate")}
                </div>

            </div>
        );
    }
}

export default BMI;