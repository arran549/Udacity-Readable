import React, { Component } from 'react';
import { Panel, Badge, Row, Col, Form, ButtonGroup } from 'react-bootstrap'
import Timestamp from './Timestamp'
import DeleteCommentButton from './DeleteCommentButton' 
import EditComment from './EditComment'
import Score from './Score'
import VoteOnComment from './VoteOnComment'


class Comment extends Component {


    render () {

        const { comment } = this.props;

        return (
            <div>
                <Panel>
                <Panel.Body>
                    <Row>
                        <Col md={1} >
                            <VoteOnComment comment={comment}/>
                        </Col>
                        <Col md={8}>
                            <p>{comment.body}</p>
                            <p><small>Written by: <b>{comment.author}</b></small> | <small><Timestamp unixtimestamp={comment.timestamp}></Timestamp></small></p>
                        </Col>
                        <Col md={2}>
                            <ButtonGroup vertical>
                                <EditComment comment={comment} />
                                <DeleteCommentButton comment={comment} />
                            </ButtonGroup>
                        </Col>
                    </Row>
                </Panel.Body>
                </Panel>

            </div>
        )
    }
}

export default Comment