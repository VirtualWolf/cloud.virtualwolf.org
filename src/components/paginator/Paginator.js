import React, {Component} from 'react';
import PaginatorLink from './PaginatorLink';

class Paginator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            previousPage: undefined,
            nextPage: undefined,
        };
    }

    componentDidMount() {
        this.calculatePageNumbers(this.props.currentPage);
    }

    componentWillReceiveProps() {
        this.calculatePageNumbers(this.props.currentPage);
    }

    calculatePageNumbers(page = 1) {
        const nextPage = +page + 1;
        let previousPage;

        if (page > 1) {
            previousPage = page - 1;
        } else {
            previousPage = 1;
        }

        this.setState({
            previousPage: previousPage,
            nextPage: nextPage,
        });

    }

    render() {
        return (
            <div className="Paginator">
                <PaginatorLink page={this.state.previousPage} basePath={this.props.basePath} linkText="&larr; Previous" />
                <PaginatorLink page={this.state.nextPage} basePath={this.props.basePath} linkText="Next &rarr;" />
            </div>
        )
    }
}

export default Paginator;