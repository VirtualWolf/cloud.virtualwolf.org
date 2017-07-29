import React, {Component} from 'react';
import PaginatorLink from './PaginatorLink';

class Paginator extends Component {
    constructor(props) {
        super(props);

        this.previousPage = undefined;
        this.nextPage = undefined;
    }

    componentWillMount() {
        this.calculateNextPage();
        this.calculatePreviousPage();
    }

    calculateNextPage() {
        this.nextPage = +this.props.currentPage + +1;
    }

    calculatePreviousPage() {
        if (this.props.currentPage > 1) {
            this.previousPage = this.props.currentPage - 1;
        } else {
            this.previousPage = 1;
        }
    }

    render() {
        return (
            <div className="Paginator">
                <PaginatorLink page={this.previousPage} basePath={this.props.basePath} linkText="&larr; Previous" />
                <PaginatorLink page={this.nextPage} basePath={this.props.basePath} linkText="Next &rarr;" />
            </div>
        )
    }
}

export default Paginator;