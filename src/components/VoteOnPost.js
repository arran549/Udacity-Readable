import React from 'react'
import { connect } from 'react-redux'
import { voteOnPostActionCreator } from '../actions/posts.actions'
import { votePost } from '../readableAPI'
import { PageHeader, Button, Badge, } from 'react-bootstrap'

class VoteOnPost extends React.Component {

    commponentDidMount () {
        
    }

    vote(id, option) {
        votePost(id, option).then((res) => {
            console.log("result", id)
            this.props.votePost(id, option)
        })         
    }

    render () {

        const { post } = this.props

        return (
            <div>
                <Badge>{post.voteScore}</Badge>
                <Button bsStyle="primary" onClick={() => this.vote(post.id, 'upVote')}>Vote Up</Button>
                <Button bsStyle="default"  onClick={() => this.vote(post.id, 'downVote')}>Vote Down</Button>
            </div>
        )
    }

}

const mapStateToProps = (state, props) => ({

})

const mapDispatchToProps = dispatch => ({
    votePost: (id, option) => dispatch(voteOnPostActionCreator(id, option))
})

export default connect(mapStateToProps, mapDispatchToProps)(VoteOnPost)