import React from 'react'
import { connect } from 'react-redux'
import { voteOnCommentActionCreator } from '../actions/comments.actions'
import { voteOnComment } from '../readableAPI'
import { Button, ButtonGroup, Label } from 'react-bootstrap'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/lib/md'
import Score from './Score'

const scoreStyle = {
    color: 'black',
    fontWeight: 'bold'
}

class VoteOnComment extends React.Component {

    onVote(id, option) {
        voteOnComment(id, option).then((res) => {
            console.log("result", id)
            this.props.voteComment(id, option)
        })         
    }

    render () {

        const { comment } = this.props

        return (
            <div>
                <ButtonGroup vertical>
                <Button bsStyle="default" onClick={() => this.onVote(comment.id, 'upVote')}>
                    <MdKeyboardArrowUp />
                </Button>
                <Button disabled style={scoreStyle}> {comment.voteScore} </Button>
                <Button bsStyle="default"  onClick={() => this.onVote(comment.id, 'downVote')}>
                    <MdKeyboardArrowDown />
                </Button>
                </ButtonGroup>
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