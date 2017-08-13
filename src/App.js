import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Home from './components/Home';
import Media from './components/Media';
import Photos from './components/Photos';
import title from './title.svg';
import './App.css';

const App = () => {
    return (
        <Router onUpdate={() => window.scrollTo(0,0)}>
            <div className="App">
                <div className="App-header">
                    <img src={title} alt="virtualwolf.cloud" id="App-headerImage" />
                    <h1 id="App-titleText">virtualwolf.cloud</h1>

                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/media">Media</Link></li>
                            <li><Link to="/photos">Photos</Link></li>
                        </ul>
                    </nav>
                </div>

                <Route exact path="/" component={Home} />
                <Route path="/media/:page?" component={Media} />
                <Route path="/photos/:page?" component={Photos} />
            </div>
        </Router>
    )
}

export default App;
