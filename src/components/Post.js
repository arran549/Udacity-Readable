import React, { Component } from 'react';
import { PageHeader, Panel, Button, Badge, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import VoteOnPost from './VoteOnPost'
import PostComments from './PostComments'
import Moment from 'react-moment'


class Post extends Component {
    state = {  }
    render() {

        const { post } = this.props;

        const timestamp = new Date(post.timestamp);

        return (
            <div key={post.id}>
                <Panel>
                    <Panel.Heading>{post.title}</Panel.Heading>
                    <Panel.Body>
                    <br />
                    <Row>
                        <Col md={8}>
                            <p>{post.body}</p>
                            <p><small>Written by: <b>{post.author}</b> | <i><Moment date={timestamp} format="ddd DD MMM @ HH:mm"></Moment></i> </small> </p>
                        </Col>
                        <Col md={2}>
                            <PostComments post={post}></PostComments>
                        </Col>
                        <Col>
                            <VoteOnPost post={post}></VoteOnPost>
                        </Col>
                    </Row>
                    </Panel.Body>
                </Panel>
            </div>
        );
    }
}



export default Post;