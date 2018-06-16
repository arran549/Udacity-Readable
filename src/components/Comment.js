import React, { Component } from 'react';
import { Panel, Badge, Row, Col, Form } from 'react-bootstrap'
import Timestamp from './Timestamp'
import DeleteCommentButton from './DeleteCommentButton' 
import EditComment from './EditComment'
import Score from './Score'


class Comment extends Component {


    render () {

        const { comment } = this.props;

        return (
            <div>
                <Panel>
                <Panel.Body>
                    <Row>
                        <Col md={10}>
                            <p>{comment.body}</p>
                            <p><small>Written by: <b>{comment.author}</b></small> | <small><Timestamp unixtimestamp={comment.timestamp}></Timestamp></small> <Score score={comment.voteScore} /></p>
                        </Col>
                        <Col md={2}>
                            <EditComment comment={comment} />
                            <DeleteCommentButton comment={comment} />
                        </Col>
                    </Row>
                </Panel.Body>
                </Panel>

            </div>
        )
    }
}

export default Comment