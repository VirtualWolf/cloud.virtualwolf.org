import React, {Component} from 'react';
import ImagesList from './ImagesList';

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
        this.fetchItems(nextProps.match.params.page);
    }

    componentDidMount() {
        this.fetchItems(this.props.match.params.page);
    }

    fetchItems(page = 1) {
        fetch(`https://virtualwolf.org/rest/media?page=${page}`)
        .then(response => response.json())
        .then(response => {
            this.setState({
                loaded: true,
                items: response.items,
                totalPostCount: response.total
            });
        });
    }

    render() {
        return (
            <ImagesList
                items={this.state.items}
                currentPage={this.props.match.params.page || 1}
                totalPostCount={this.state.totalPostCount}
                loaded={this.state.loaded}
                basePath={"/media/"}
            />
        )
    }
}

export default Media;