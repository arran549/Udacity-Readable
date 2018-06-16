import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deletePostActionCreator } from './../actions/posts.actions'
import { deletePost } from '../readableAPI'
import { Button } from 'react-bootstrap'
import { MdDelete } from 'react-icons/lib/md'
import '../styling.button.css'

class DeletePostButton extends Component {
    state = {  }

    onDeletePost(id) {
        deletePost(id).then((res) => {
            this.props.deletePost(id)
        })
    }

    render() {

        const { post } = this.props;

        return (
            <div>
                <Button className="button" bsStyle="danger" onClick={() => this.onDeletePost(post.id)}>
                <MdDelete icon="delete"></MdDelete> Delete Post</Button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({

})

const mapDispatchToProps = dispatch => ({
    deletePost: (id) => dispatch(deletePostActionCreator(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(DeletePostButton);