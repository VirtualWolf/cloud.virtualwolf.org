import React, {Component} from 'react';

class PaginatorLink extends Component {
    render() {
        return (
            <span className="Paginator-link">
                <a href={this.props.basePath + this.props.page}>{this.props.linkText}</a>
            </span>
        )
    }
}

export default PaginatorLink;