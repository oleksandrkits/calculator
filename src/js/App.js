import React, { Component } from 'react';
import '../css/App.css';
import Calculator from "./Calculator";

class App extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Calculator />
                </div>
            </div>
        );
    }
}

export default App;
