import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import { Panel, Badge, Row, Col } from 'react-bootstrap'
import VoteOnPost from './VoteOnPost'
import PostComments from './PostComments'
import Timestamp from  './Timestamp'
import DeletePostButton from './DeletePostButton'
import ViewPostButton from './ViewPostButton'


class PostDetail extends Component {

    render() {

        const { post } = this.props;

        if(!post) return (<div></div>);

        return (
            <div>
           
                    <Panel.Heading><h1>{post.title} <Badge>Score: {post.voteScore}</Badge></h1>
                        <VoteOnPost post={post}></VoteOnPost>
                    </Panel.Heading>
                    <Panel.Body>
                    <br />
                    <Row>
                        <Col md={9}>
                            <p>{post.body}</p>
                            <p><small>Written by: <b>{post.author}</b> | <i><Timestamp unixtimestamp={post.timestamp}></Timestamp></i></small></p>
                            <p><PostComments post={post}></PostComments></p>
                        </Col>

                        <Col md={1}>
                            <DeletePostButton post={post}></DeletePostButton>                           
                        </Col>
                    </Row>
                    </Panel.Body>
            </div>
        );
    }
}


const mapStateToProps = (state, props) => {

    const selectedPostId = props.match.params.id

    return {
        post: state.posts.all.length && state.posts.all.filter((post) => post.id === selectedPostId, [])[0]
    }
}

export default connect(mapStateToProps)(PostDetail)