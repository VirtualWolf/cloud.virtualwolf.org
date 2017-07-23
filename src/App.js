import React, {Component} from 'react';
import Location from './Location.js';
import title from './title.png';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={title} alt="virtualwolf.cloud" />
                    <h1>virtualwolf.cloud</h1>
                </div>
                <div className="App-body">
                    <Location location="outdoor" />
                    <Location location="indoor" />
                </div>
            </div>
        );
    }
}

export default App;
