import React, {Component} from 'react';

class MediaItemList extends Component {
    render() {
        return (
            <div>
                {this.props.items.map(item => (
                    <div className="Media-item" key={item.id}>
                        <img src={item.thumbnailUrl} alt={item.message} className="Media-image" />
                        <p dangerouslySetInnerHTML={{__html: item.message}} />
                    </div>
                ))}
            </div>
        )
    }
}

export default MediaItemList;