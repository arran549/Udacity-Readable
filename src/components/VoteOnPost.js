import React from 'react'
import { connect } from 'react-redux'
import { voteOnPostActionCreator } from '../actions/posts.actions'
import { votePostUp, votePostDown } from '../readableAPI'
import { PageHeader, Button, Badge, } from 'react-bootstrap'

class VoteOnPost extends React.Component {

    commponentDidMount () {
        
    }

    upVote (id) {
        console.log('clicked', id);
        votePostUp(id).then((res) => {
            console.log("result", id)
            this.props.votePostUp(id, 'upVote')
        })

        
    }

    render () {

        const { post } = this.props

        return (
            <div>
                <Badge>{post.voteScore}</Badge>
                <Button bsStyle="primary" onClick={() => this.upVote(post.id)}>Vote Up</Button>
                <Button bsStyle="default">Vote Down</Button>
            </div>
        )
    }

}

const mapStateToProps = (state, props) => ({

})

const mapDispatchToProps = dispatch => ({
    votePostUp: (id, option) => dispatch(voteOnPostActionCreator(id, option))
})

export default connect(mapStateToProps, mapDispatchToProps)(VoteOnPost)