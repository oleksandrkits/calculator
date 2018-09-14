import React, { Component } from 'react';
import '../css/App.css';
import Calculator from "./Calculator";
import BMI from "./BMI";
import {Switch, Route, Link } from 'react-router-dom';

class CalcWrapper extends React.Component {
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

class BmiWrapper extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <BMI />
                </div>
            </div>
        );
    }
}

const Home = () => (
    <div>
        <h1>Welcome to my calc!</h1>
    </div>
)

const App = () => (
    <div>
        <Header />
        <Main />
    </div>
);

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/simple' component={CalcWrapper}/>
            <Route path='/bmi' component={BmiWrapper}/>
        </Switch>
    </main>
);

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/simple'>Simple</Link></li>
                <li><Link to='/bmi'>BMI</Link></li>
            </ul>
        </nav>
    </header>
);
export default App;
