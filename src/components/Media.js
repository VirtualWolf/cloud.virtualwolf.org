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

    componentDidMount() {
        this.fetchMediaItems();
    }

    componentWillUnmount() {
        this.setState({
            loaded: false
        })
    }

    fetchMediaItems() {
        const page = this.props.match.params.page || 1;
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
                <Loader loaded={this.state.loaded}>
                    <Paginator currentPage={this.props.match.params.page || 1} basePath="/media/" />
                    <MediaItemList items={this.state.items} />
                    <Paginator currentPage={this.props.match.params.page || 1} basePath="/media/" />
                </Loader>
            </div>
        )
    }
}

export default Media;