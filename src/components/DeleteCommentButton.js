import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteCommentActionCreator } from './../actions/comments.actions'
import { deleteComment } from '../readableAPI'
import { Button } from 'react-bootstrap'
import {MdDelete} from 'react-icons/lib/md'

class DeleteCommentButton extends Component {
    state = {  }

    onDeleteComment(postId, commentId) {
        deleteComment(commentId).then((res) => {
            this.props.deleteComment(postId, commentId)
        })
    }

    render() {

        const { comment } = this.props;

        return (
            <div>
                <Button bsStyle="" onClick={() => this.onDeleteComment(comment.parentId, comment.id)}>
                <MdDelete icon="delete"></MdDelete> Delete Comment</Button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({

})

const mapDispatchToProps = dispatch => ({
    deleteComment: (postId, commentId) => dispatch(deleteCommentActionCreator(postId, commentId))
})


export default connect(mapStateToProps, mapDispatchToProps)(DeleteCommentButton);