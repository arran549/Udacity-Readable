import React from 'react'
import { connect } from 'react-redux'
import { updatePostActionCreator } from '../actions/posts.actions'
import { votePostUp, votePostDown } from '../readableAPI'
import { PageHeader, Panel, Button, Badge, Row, Col } from 'react-bootstrap'

class VoteOnPost extends React.Component {

    commponentDidMount () {
        
    }

    upVote () {
        console.log('clicked');
    }

    render () {

        const { post } = this.props

        return (
            <div>
                <Badge>{post.voteScore}</Badge>
                <Button bsStyle="primary" onClick={this.upVote}>Vote Up</Button>
                <Button bsStyle="default">Vote Down</Button>
            </div>
        )
    }

}

const mapStateToProps = (state, props) => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(VoteOnPost)