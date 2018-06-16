import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import {MdEdit} from 'react-icons/lib/md'
import '../styling.button.css'

class EditPostButton extends Component {
    state = {  }
    render() {
        return (
            <Link to={`/${this.props.post.category}/`+ this.props.post.id + "/edit"}>
                <Button className="button">
                    <MdEdit icon="edit"></MdEdit> Edit Post
                </Button>
            </Link>       
        );
    }
}

export default (EditPostButton);