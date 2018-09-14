import React from "react";
import Button from "./Button";

class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            digits: '',
            operation: '',
            lhs: null,
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
        const digits = this.state.digits;
        if (digits !== '') {
            if (this.state.lhs == null && operation !== '=') {
                const lhs = parseInt(digits, 10);
                this.setState({lhs: lhs, operation: operation, digits: ''});
            }
            else if (operation === '=') {
                const lhs = this.state.lhs;
                const rhs = parseInt(digits, 10);

                let result;
                switch (this.state.operation) {
                    case '+':
                        result = lhs + rhs;
                        break;
                    case '-':
                        console.log('minus');
                        result = lhs - rhs;
                        break;
                    case '*':
                        result = lhs * rhs;
                        break;
                    case '÷':
                        result = lhs / rhs;
                        break;
                }
                if (result.toString().length > 20){
                    result = 'Result is too large'
                }
                this.setState({lhs: null, digits: result.toString(), operation: null})
            }
        }

    }
    renderDigit(i) {
        return <Button value={i} class={'square'} onClick={()=>this.handleDigitClick(i)}/>;
    }
    renderOperation(i) {
        return <Button value={i} class={'square'} onClick={()=>this.handleOperationClick(i)}/>;
    }
    renderClear(i) {
        return <Button value={i} class={'square'} onClick={()=>this.handleClearClick()}/>;
    }
    renderScreen(i) {
        return <Button value={i} class={'screen'} onClick={()=> {}}/>;
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderScreen(this.state.digits)}
                </div>
                <div className="board-row">
                    {this.renderDigit(1)}
                    {this.renderDigit(2)}
                    {this.renderDigit(3)}
                    {this.renderOperation('÷')}
                </div>
                <div className="board-row">
                    {this.renderDigit(4)}
                    {this.renderDigit(5)}
                    {this.renderDigit(6)}
                    {this.renderOperation('-')}
                </div>
                <div className="board-row">
                    {this.renderDigit(7)}
                    {this.renderDigit(8)}
                    {this.renderDigit(9)}
                    {this.renderOperation('+')}
                </div>
                <div className="board-row">
                    {this.renderDigit(0)}
                    {this.renderClear('C')}
                    {this.renderOperation('=')}
                    {this.renderOperation('*')}
                </div>
            </div>
        );
    }
}

export default Calculator