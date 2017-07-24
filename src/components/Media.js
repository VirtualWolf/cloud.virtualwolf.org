import React, {Component} from 'react';
import MediaItem from './MediaItem';

class Media extends Component {
    constructor() {
        super();

        this.state = {
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
                items: response,
            });
        });
    }

    render() {
        return (
            <div>
                {this.state.items.map(item => {
                    return <MediaItem key={item.id} url={item.url} thumbnailUrl={item.thumbnailUrl} context={item.context} />
                })}
            </div>
        )
    }
}

export default Media;