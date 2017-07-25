import React, {Component} from 'react';
import MediaItemList from './MediaItemList';
import Loader from 'react-loader';

class Media extends Component {
    constructor() {
        super();

        this.state = {
            loaded: false,
            items: [],
        };
    }

    componentDidMount() {
        this.fetchMediaItems();
    }

    fetchMediaItems() {
        fetch('https://virtualwolf.org/i/api/v1/contexts')
        .then(response => response.json())
        .then(response => {
            this.setState({
                loaded: true,
                items: response,
            });
        });
    }

    render() {
        return (
            <Loader loaded={this.state.loaded}>
                <MediaItemList items={this.state.items} />
            </Loader>
        )
    }
}

export default Media;