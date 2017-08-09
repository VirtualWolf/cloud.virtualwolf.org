import React, {Component} from 'react';
import Loader from 'react-loader';

class Location extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            temperature: '–',
            humidity: '–',
        };
    }

    componentDidMount() {
        this.fetchCurrentData();
        this.timer = setInterval(() => this.fetchCurrentData(), 60000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    fetchCurrentData() {
        fetch(`https://virtualwolf.org/rest/weather/locations/${this.props.location}`)
        .then(response => response.json())
        .then(response => {
            this.setState({
                loaded: true,
                temperature: response.temperature,
                humidity: response.humidity,
            });
        });
    }

    render() {
        return (
            <Loader loaded={this.state.loaded}>
                <div className="Location-item">
                    <h2 className="titleCase">{this.props.location}</h2>
                    <p><strong>{this.state.temperature}</strong>&deg;C and {this.state.humidity}% humidity</p>
                </div>
            </Loader>
        )
    }
}

export default Location;