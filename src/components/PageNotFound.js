import React, { Component } from 'react'
import { Well } from 'react-bootstrap'
import { withRouter} from 'react-router'
import ViewPostsButton from './ViewPostsButton'

class PageNotFound extends Component {

    render () {
        return (
            <div class="container">
                <h1>404: Page Not Found</h1>
                <Well>
                    <h3>There seems to be an error.</h3>
                    <br />
                    <p>We could not find the page you are looking for</p>
                </Well>
                <ViewPostsButton />
            </div>
        );
    }
}

export default withRouter(PageNotFound);