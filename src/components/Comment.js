import React, { Component } from 'react';
import { Panel, Badge, Row, Col } from 'react-bootstrap'
import Timestamp from './Timestamp'


class Comment extends Component {


    render () {

        const { comment } = this.props;

        return (
            <div>
                <Panel>
                <Panel.Heading>
                    <Panel.Title>{comment.author}</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    {comment.body}
                    <small><Timestamp unixtimestamp={comment.timestamp}></Timestamp></small>
                </Panel.Body>
                </Panel>
            </div>
        )
    }
}

export default Comment