import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Home from './components/Home';
import Media from './components/Media';
import title from './title.png';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <div className="App-header">
                    <img src={title} alt="virtualwolf.cloud" />
                    <h1>virtualwolf.cloud</h1>

                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/media">Media</Link></li>
                        </ul>
                    </nav>
                </div>

                <Route exact path="/" component={Home} />
                <Route exact path="/media" component={Media} />
            </div>
        </Router>
    )

}

export default App;
