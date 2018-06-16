import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { MdOpenInNew } from 'react-icons/lib/md'
import '../styling.button.css'

class ViewPostsButton extends Component {

    render() {

        return (
            <Link to={`/posts/`}>
                <Button className="button">
                <MdOpenInNew></MdOpenInNew> View Posts</Button>
            </Link>
        );
    }
}

export default withRouter(ViewPostsButton);