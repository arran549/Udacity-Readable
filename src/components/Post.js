import React, { Component } from 'react';
import { Panel, Badge, Row, Col } from 'react-bootstrap'
import VoteOnPost from './VoteOnPost'
import PostComments from './PostComments'
import Timestamp from  './Timestamp'
import DeletePostButton from './DeletePostButton'


class Post extends Component {
    state = {  }
    render() {

        const { post } = this.props;

        return (
            <div key={post.id}>
                <Panel>
                    <Panel.Heading>{post.title}</Panel.Heading>
                    <Panel.Body>
                    <br />
                    <Row>
                        <Col md={9}>
                            <p>{post.body}</p>
                            <p><small>Written by: <b>{post.author}</b> | <i><Timestamp unixtimestamp={post.timestamp}></Timestamp></i></small></p>
                            <p><PostComments post={post}></PostComments><Badge>Score: {post.voteScore}</Badge></p>
                        </Col>
                        <Col  md={2}>
                            <VoteOnPost post={post}></VoteOnPost>
                        </Col>
                        <Col md={1}>
                            <DeletePostButton post={post}></DeletePostButton>
                        </Col>
                    </Row>
                    </Panel.Body>
                </Panel>
            </div>
        );
    }
}



export default Post;