import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import {MdEdit} from 'react-icons/lib/md'

class EditPostButton extends Component {
    state = {  }
    render() {
        return (
            <Link to={"/posts/"+ this.props.post.id + "/edit"}>
                <Button>
                    <MdEdit icon="edit"></MdEdit> Edit Post
                </Button>
            </Link>       
        );
    }
}

export default (EditPostButton);