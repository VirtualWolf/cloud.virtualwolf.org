import React, {Component} from 'react';

class ImagesItemList extends Component {
    render() {
        return (
            <div>
                {this.props.items.map(item => (
                    <div className="Images-item" key={item.id}>
                        <img src={item.url} alt={item.title} className="Images-image" />
                        <p dangerouslySetInnerHTML={{__html: item.title !== 'Untitled' ? item.title : '&nbsp;'}} />
                    </div>
                ))}
            </div>
        )
    }
}

export default ImagesItemList;