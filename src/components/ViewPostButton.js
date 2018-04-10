import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectPostActionCreator } from './../actions/posts.actions'
import { Button } from 'react-bootstrap'
import { MdView } from 'react-icons/lib/md'
import { LinkContainer } from 'react-router-bootstrap';



class ViewPostButton extends Component {
    state = {  }


    onViewPost(id) {
        this.props.selectPost(id)
    }

    render() {

        console.log(this.props.id)
        return (
            <LinkContainer to={"/posts/" + this.props.post.id}>
                <Button onClick={() => this.onViewPost(this.props.post.id)}>View</Button>
            </LinkContainer>
        );
    }
}

const mapStateToProps = (state, props) => ({
    id: state.posts.selectedPostId
})

const mapDispatchToProps = dispatch => ({
    selectPost: (id) => dispatch(selectPostActionCreator(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(ViewPostButton);