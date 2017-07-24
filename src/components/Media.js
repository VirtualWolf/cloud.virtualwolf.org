import React, {Component} from 'react';
import MediaItem from './MediaItem';
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
                <div>
                    {this.state.items.map(item => {
                        return <MediaItem key={item.id} url={item.url} thumbnailUrl={item.thumbnailUrl} context={item.context} />
                    })}
                </div>
            </Loader>
        )
    }
}

export default Media;