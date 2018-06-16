import React, { Component } from 'react';
import { Panel, Badge, Row, Col } from 'react-bootstrap'
import VoteOnPost from './VoteOnPost'
import PostComments from './PostComments'
import Timestamp from  './Timestamp'
import Score from './Score'
import DeletePostButton from './DeletePostButton'
import ViewPostButton from './ViewPostButton'
import EditPostButton from './EditPostButton'

class Post extends Component {
    state = {  }
    render() {

        const { post } = this.props;

        return (
            <div key={post.id}>
                <Panel>
                    <Panel.Body>
                    <Row>
                        <Col md={10}>
                            <h2>{post.title}
                            <div className="pull-right">
                                <VoteOnPost post={post}></VoteOnPost>
                            </div>
                            </h2>
                            <h5>{post.body}</h5>
                            <p><small>Written by: <b>{post.author}</b> | <i><Timestamp unixtimestamp={post.timestamp}></Timestamp></i></small></p>
                            <p><PostComments post={post}></PostComments><Score score={post.voteScore} /></p>
                        </Col>
                        <Col md={2}>
                            <br/>
                            <ViewPostButton post={post} />
                            <EditPostButton post={post} />
                            <DeletePostButton post={post} />
                        </Col>
                    </Row>
                    </Panel.Body>
                </Panel>
            </div>
        );
    }
}



export default Post;