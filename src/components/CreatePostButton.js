import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectPostActionCreator } from './../actions/posts.actions'
import { Button } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { MdView } from 'react-icons/lib/md'
import { LinkContainer } from 'react-router-bootstrap';


class CreatePostButton extends Component {
    state = {  }

    render() {
        return (           
            <Link to={"/posts/create"}>
                <Button>Create</Button>
            </Link>
        );
    }
}

const mapStateToProps = (state, props) => ({

})

const mapDispatchToProps = dispatch => ({

})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatePostButton));