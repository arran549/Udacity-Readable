import React, { Component } from 'react';
import { Badge } from 'react-bootstrap'

class Score extends Component {

    render() {
        return (
            <Badge>Score: {this.props.score}</Badge>
        );
    }
}

export default Score;