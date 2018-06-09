import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import { Link, withRouter } from 'react-router-dom'
import { Panel, Badge, Row, Col, Button } from 'react-bootstrap'
import VoteOnPost from './VoteOnPost'
import PostComments from './PostComments'
import Comment from './Comment'
import AddComment from './AddComment'
import EditComment from './EditComment'
import Timestamp from  './Timestamp'
import Score from './Score'
import DeletePostButton from './DeletePostButton'
import ViewPostButton from './ViewPostButton'
import { getCommentsForPostActionCreator } from './../actions/posts.actions'
import { updateCommentsForPostActionCreator } from './../actions/comments.actions'
import { getAllCommentsForPost } from '../readableAPI';
import EditPostButton from './EditPostButton';


class PostDetail extends Component {

    componentDidMount () {
       this.props.updateComments(this.props.match.params.id);
    }

    render() {

        const { post } = this.props;

        if(!post) return (<div></div>);

        return (
            <div class="container">
                <Panel.Heading>
                    <h1>{post.title} <Score score={post.voteScore} />
                                <div class="pull-right inline" >
                                    <VoteOnPost post={post}></VoteOnPost>
                                </div>
                            </h1>
                    
                </Panel.Heading>
                <hr />
                <Panel.Body>
                <br />
                <Row>
                    <Col md={11}>
                        <p>{post.body}</p>
                        <p><small>Written by: <b>{post.author}</b> | <i><Timestamp unixtimestamp={post.timestamp} /></i></small></p>
                        <p><PostComments post={post}></PostComments></p>
                    </Col>

                    <Col md={1}>
                        <DeletePostButton post={post}></DeletePostButton>       
                        <EditPostButton post={post}></EditPostButton>
                    </Col>
                </Row>
                <Row>
                    {this.props.comments && this.props.comments.map((comment) => (
                        <Comment key={comment.id} comment={comment}></Comment>
                    ))}
                </Row>
                </Panel.Body>
                <AddComment post={post}></AddComment>

            </div>
        );
    }
}


const mapStateToProps = (state, props) => {

    const selectedPostId = props.match.params.id;

    const post  = state.posts.all.length && state.posts.all.filter((post) => post.id === selectedPostId, [])[0]

    let comments = []

    if(selectedPostId && post && post.comments) {
        comments = post.comments.map((comment) => state.comments.byId[comment]);
    }

    return {
        post: state.posts.all.length && state.posts.all.filter((post) => post.id === selectedPostId, [])[0],
        selectedPostId,
        comments: [...comments]
    }
}

const mapDispatchToProps = dispatch => ({
    updateComments: (postId) => getAllCommentsForPost(postId).then((comments) => dispatch(updateCommentsForPostActionCreator(postId, comments)))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetail))