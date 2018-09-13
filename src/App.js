import React, { Component } from 'react';
import './App.css';

class Button extends React.Component {
    render() {
        return (
            <button className={this.props.class} onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}


class Board extends React.Component {
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
        digits += value.toString();
        this.setState({digits: digits});
    }
    handleClearClick(){
        this.setState({digits: ''});
    }
    handleOperationClick(operation){
        const digits = this.state.digits;
        if (digits !== '') {
            if (this.state.lhs == null) {
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
                this.setState({lhs: null, digits: result.toString()})
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
        return <Button value={i} class={'clear'} onClick={()=>this.handleClearClick()}/>;
    }
    renderScreen(i) {
        return <Button value={i} class={'screen'}/>;
    }

    render() {
        const status = 'Next player: X';

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
                    {this.renderClear('clear')}
                    {this.renderOperation('=')}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================



export default Game;
