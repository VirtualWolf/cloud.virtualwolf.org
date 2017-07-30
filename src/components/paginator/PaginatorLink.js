import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class PaginatorLink extends Component {
    render() {
        return (
            <span className="Paginator-link">
                <Link to={this.props.basePath + this.props.page}>{this.props.linkText}</Link>
            </span>
        )
    }
}

export default PaginatorLink;