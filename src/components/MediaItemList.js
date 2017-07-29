import React, {Component} from 'react';

class MediaItemList extends Component {
    render() {
        return (
            <div>
                {this.props.items.map(item => (
                    <div className="Media-item" key={item.id}>
                        <a href={item.url}><img src={item.thumbnailUrl} alt={item.context} className="Media-image" /></a>
                        <p>{item.context}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default MediaItemList;