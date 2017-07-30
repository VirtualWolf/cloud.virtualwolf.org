import React, {Component} from 'react';

class MediaItemList extends Component {
    render() {
        return (
            <div>
                {this.props.items.map(item => (
                    <div className="Media-item" key={item.id}>
                        <img src={item.thumbnailUrl} alt={item.context} className="Media-image" />
                        <p>{item.context}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default MediaItemList;