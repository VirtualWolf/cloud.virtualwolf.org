import React, {Component} from 'react';
import Loader from 'react-loader';
import Paginator from './paginator/Paginator';

class ImagesList extends Component {
    constructor() {
        super();

        this.state = {
            items: [],
            totalPostCount: undefined,
            loaded: false,
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            items: nextProps.items,
            totalPostCount: nextProps.totalPostCount,
            loaded: nextProps.loaded,
        });
    }

    render() {
        return (
            <div>
                <Paginator currentPage={this.props.currentPage} total={this.state.totalPostCount} basePath={this.props.basePath} />

                <Loader loaded={this.state.loaded}>
                    {this.props.items.map(item => {
                        if (this.props.type === 'photos') {
                            return (
                                <div className="Images-item" key={item.id}>
                                    <img src={item.url} alt={item.title} className="Images-image" />
                                    <p dangerouslySetInnerHTML={{__html: item.title !== 'Untitled' ? item.title : '&nbsp;'}} />
                                </div>
                            )
                        } else {
                            return (
                                <div className="Images-item" key={item.id}>
                                    {item.items.map(item => {
                                        return (
                                            <img src={item.url} alt={item.description} className="Images-image" />
                                        )
                                    })}

                                    <p>{item.message}</p>
                                </div>
                            )
                        }
                    })}
                    <Paginator currentPage={this.props.currentPage} total={this.state.totalPostCount} basePath={this.props.basePath} />
                </Loader>
            </div>
        )
    }
}

export default ImagesList;