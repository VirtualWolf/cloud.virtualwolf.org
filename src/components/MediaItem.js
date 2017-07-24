import React, {Component} from 'react';

class MediaItem extends Component {
    render() {
        console.log(this);
        return (
            <div className="Media-item" key={this.props.key}>
                <a href={this.props.url}><img src={this.props.thumbnailUrl} alt={this.props.context} className="Media-image" /></a>
                <p>{this.props.context}</p>
            </div>
        )
    }
}

export default MediaItem;