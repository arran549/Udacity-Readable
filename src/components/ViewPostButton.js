import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectPostActionCreator } from './../actions/posts.actions'
import { Button } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { MdOpenInNew } from 'react-icons/lib/md'
import { LinkContainer } from 'react-router-bootstrap';
import '../styling.button.css'

class ViewPostButton extends Component {
    state = {  }


    onViewPost(id) {
        this.props.selectPost(id)
    }

    render() {

        console.log(this.props.id)
        return (
            
            <Link to={`/${this.props.post.category}/`+ this.props.post.id}>
                <Button className="button" onClick={() => this.onViewPost(this.props.post.id)}>
                <MdOpenInNew></MdOpenInNew> View</Button>
            </Link>
            
        );
    }
}

const mapStateToProps = (state, props) => ({
    id: state.posts.selectedPostId
})

const mapDispatchToProps = dispatch => ({
    selectPost: (id) => dispatch(selectPostActionCreator(id))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewPostButton));