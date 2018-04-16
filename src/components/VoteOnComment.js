import React from 'react'
import { connect } from 'react-redux'
import { voteOnCommentActionCreator } from '../actions/posts.actions'
import { voteComment } from '../readableAPI'
import { Button } from 'react-bootstrap'

class VoteOnComment extends React.Component {

    commponentDidMount () {
        
    }

    onVote(id, option) {
        voteComment(id, option).then((res) => {
            console.log("result", id)
            this.props.votePost(id, option)
        })         
    }

    render () {

        const { post } = this.props

        return (
            <div>
                <Button bsStyle="primary" onClick={() => this.onVote(post.id, 'upVote')}>Vote Up</Button>
                <Button bsStyle="default"  onClick={() => this.vote(post.id, 'downVote')}>Vote Down</Button>
            </div>
        )
    }

}

const mapStateToProps = (state, props) => ({

})

const mapDispatchToProps = dispatch => ({
    voteComment: (id, option) => dispatch(voteOnCommentActionCreator(id, option))
})

export default connect(mapStateToProps, mapDispatchToProps)(VoteOnComment)