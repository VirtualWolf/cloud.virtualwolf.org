import React, {Component} from 'react';
import ImagesList from './ImagesList';

class Images extends Component {
    constructor() {
        super();

        this.state = {
            loaded: false,
            items: [],
            totalPostCount: undefined,
            currentPage: undefined,
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            loaded: false,
            currentPage: nextProps.match.params.page,
        });
        this.fetchItems(nextProps.match.params.page);
    }

    componentDidMount() {
        this.fetchItems(this.props.match.params.page);
    }

    fetchItems(page = 1) {
        fetch(`${this.props.url}?page=${page}`)
        .then(response => response.json())
        .then(response => {
            this.setState({
                loaded: true,
                items: response.items,
                totalPostCount: response.total,
                currentPage: this.props.match.params.page,
            });
        });
    }

    render() {
        return (
            <ImagesList
                items={this.state.items}
                currentPage={this.state.currentPage}
                totalPostCount={this.state.totalPostCount}
                loaded={this.state.loaded}
                basePath={this.props.basePath}
            />
        )
    }
}

export default Images;