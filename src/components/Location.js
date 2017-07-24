import React, {Component} from 'react';

class Location extends Component {
    constructor(props) {
        super(props);

        this.state = {
            temperature: null,
            humidity: null,
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
        fetch(`https://virtualwolf.org/weather/api/v2/locations/${this.props.location}`)
        .then(response => response.json())
        .then(response => {
            this.setState({
                temperature: response.temperature,
                humidity: response.humidity,
            });
        });
    }

    render() {
        return (
            <div className="Location-item">
                <h2 className="titleCase">{this.props.location}</h2>
                <p><strong>{this.state.temperature}</strong>&deg;C and {this.state.humidity}% humidity</p>
            </div>
        )
    }
}

export default Location;