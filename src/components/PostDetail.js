import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import { Panel, Badge, Row, Col } from 'react-bootstrap'
import VoteOnPost from './VoteOnPost'
import PostComments from './PostComments'
import Comment from './Comment'
import Timestamp from  './Timestamp'
import Score from './Score'
import DeletePostButton from './DeletePostButton'
import ViewPostButton from './ViewPostButton'
import { getCommentsForPostActionCreator } from './../actions/posts.actions'
import { updateCommentsForPostActionCreator } from './../actions/comments.actions'
import { getAllCommentsForPost } from '../readableAPI';


class PostDetail extends Component {

    componentDidMount () {
       this.props.updateComments(this.props.match.params.id);//this.props.selectedPostId);

    }

    render() {

        const { post } = this.props;

        if(!post) return (<div></div>);

        return (
            <div>
           
                    <Panel.Heading><h1>{post.title} <Score score={post.voteScore} /></h1>
                        <VoteOnPost post={post}></VoteOnPost>
                    </Panel.Heading>
                    <Panel.Body>
                    <br />
                    <Row>
                        <Col md={9}>
                            <p>{post.body}</p>
                            <p><small>Written by: <b>{post.author}</b> | <i><Timestamp unixtimestamp={post.timestamp} /></i></small></p>
                            <p><PostComments post={post}></PostComments></p>
                        </Col>

                        <Col md={1}>
                            <DeletePostButton post={post}></DeletePostButton>                           
                        </Col>
                    </Row>
                    <Row>
                        {this.props.comments && this.props.comments.map((comment) => (
                            <Comment key={comment.id} comment={comment}></Comment>
                        ))}
                    </Row>
                    </Panel.Body>
            </div>
        );
    }
}


const mapStateToProps = (state, props) => {

    const selectedPostId = props.match.params.id

    console.log("comments:", state.comments.posts);

    return {
        post: state.posts.all.length && state.posts.all.filter((post) => post.id === selectedPostId, [])[0],
        selectedPostId,
        comments: state.comments.posts[selectedPostId]
    }
}

const mapDispatchToProps = dispatch => ({
    updateComments: (postId) => getAllCommentsForPost(postId).then((comments) => dispatch(updateCommentsForPostActionCreator(postId, comments)))

})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)