import React, { Component } from 'react';
import { Panel, Badge, Row, Col } from 'react-bootstrap'
import Timestamp from './Timestamp'


class Comment extends Component {


    render () {

        const { comment } = this.props;

        return (
            <div>
                <Panel>
                <Panel.Body>
                    <p>{comment.body}</p>
                    <p><small>Written by: <b>{comment.author}</b></small> | <small><Timestamp unixtimestamp={comment.timestamp}></Timestamp></small></p>
                </Panel.Body>
                </Panel>
            </div>
        )
    }
}

export default Comment