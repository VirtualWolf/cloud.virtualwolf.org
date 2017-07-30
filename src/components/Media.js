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
        const perPage = 10;
        const offset = (perPage * (page || 0)) - perPage;

        fetch(`https://virtualwolf.org/i/api/v1/contexts?start=${offset}`)
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
            <div>
                <Paginator currentPage={this.props.match.params.page} basePath="/media/" />
                <Loader loaded={this.state.loaded}>
                    <MediaItemList items={this.state.items} />
                    <Paginator currentPage={this.props.match.params.page} basePath="/media/" />
                </Loader>
            </div>
        )
    }
}

export default Media;