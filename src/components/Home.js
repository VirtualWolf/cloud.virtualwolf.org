import React, {Component} from 'react';
import Location from './Location';

class Home extends Component {
    render() {
        return (
            <div className="App-body">
                <Location location="outdoor" />
                <Location location="indoor" />
            </div>
        );
    }
}

export default Home;
