import React, {Component} from 'react';
import Loader from 'react-loader';
import ImagesItemList from './ImagesItemList';
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
                    <ImagesItemList items={this.state.items} />
                    <Paginator currentPage={this.props.currentPage} total={this.state.totalPostCount} basePath={this.props.basePath} />
                </Loader>
            </div>
        )
    }
}

export default ImagesList;