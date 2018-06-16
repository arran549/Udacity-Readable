import React, { Component } from 'react'
import { Well } from 'react-bootstrap'
import { withRouter} from 'react-router'
import ViewPostsButton from './ViewPostsButton'

class PostNotFound extends Component {

    render() {
        return (
            <div class="container">
                <h2>No Post Found</h2>
                <Well>No post could be found for post id: {this.props.match.params.id}]</Well>

                <ViewPostsButton />
            </div>
        );
    }
}

export default withRouter(PostNotFound);