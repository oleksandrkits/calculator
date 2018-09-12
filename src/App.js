import React, { Component } from 'react';
import './App.css';

class Digit extends React.Component {
    render() {
        return (
            <button className="square">
                {this.props.value}
            </button>
        );
    }
}

class Clear extends React.Component {
    render() {
        return (
            <button className="clear">
                {this.props.value}
            </button>
        );
    }
}

class Sqreen extends React.Component {
    render() {
        return (
            <button className="sqreen">
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    renderDigit(i) {
        return <Digit value={i}/>;
    }
    renderClear(i) {
        return <Clear value={i}/>;
    }
    renderSqreen(i) {
        return <Sqreen value={i}/>;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="board-row">
                    {this.renderSqreen(0)}
                </div>
                <div className="board-row">
                    {this.renderDigit(1)}
                    {this.renderDigit(2)}
                    {this.renderDigit(3)}
                    {this.renderDigit('÷')}
                </div>
                <div className="board-row">
                    {this.renderDigit(4)}
                    {this.renderDigit(5)}
                    {this.renderDigit(6)}
                    {this.renderDigit('-')}
                </div>
                <div className="board-row">
                    {this.renderDigit(7)}
                    {this.renderDigit(8)}
                    {this.renderDigit(9)}
                    {this.renderDigit('+')}
                </div>
                <div className="board-row">
                    {this.renderDigit(0)}
                    {this.renderClear('clear')}
                    {this.renderDigit('=')}
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
