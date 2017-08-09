import React, {Component} from 'react';
import Loader from 'react-loader';
import MediaItemList from './MediaItemList';
import Paginator from './paginator/Paginator';


class Media extends Component {
    constructor() {
        super();

        this.state = {
            loaded: false,
            items: [],
            totalPostCount: undefined,
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            loaded: false
        });
        this.fetchMediaItems(nextProps.match.params.page);
    }

    componentDidMount() {
        this.fetchMediaItems(this.props.match.params.page);
    }

    fetchMediaItems(page = 1) {
        fetch(`https://virtualwolf.org/rest/media?page=${page}`)
        .then(response => response.json())
        .then(response => {
            this.setState({
                loaded: true,
                items: response.posts,
                totalPostCount: response.total
            });
        });
    }

    render() {
        return (
            <div>
                <Paginator currentPage={this.props.match.params.page} total={this.state.totalPostCount} basePath="/media/" />

                <Loader loaded={this.state.loaded}>
                    <MediaItemList items={this.state.items} />
                    <Paginator currentPage={this.props.match.params.page} total={this.state.totalPostCount} basePath="/media/" />
                </Loader>
            </div>
        )
    }
}

export default Media;