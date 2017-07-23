import React, {Component} from 'react';

class Location extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null,
            temperature: null,
            humidity: null,
        };
    }

    componentDidMount() {
        fetch(`https://virtualwolf.org/weather/api/v2/locations/${this.props.location}`)
        .then(response => response.json())
        .then(response => {
            this.setState({
                name: this.props.location,
                temperature: response.temperature,
                humidity: response.humidity,
            });
        });
    }

    render() {
        return (
            <div>
                <h2 className="titleCase">{this.state.name}</h2>
                <p><strong>{this.state.temperature}</strong>&deg;C and {this.state.humidity}% humidity</p>
            </div>
        )
    }
}

export default Location;