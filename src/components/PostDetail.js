import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';


class PostDetail extends Component {

    state = {  }

    render() {

        console.log("PostDetail: ", this.props.post1, this.props.selectedPostId1);
        return (
            <div>
                <h1>Post Details Here</h1>
            </div>
        );
    }
}


const mapStateToProps = (state, props) => {
    console.log(" state : ", state);

    return {
    post1: state.posts.all.filter((post) => post.id === state.posts.selectedPostId),
    selectedPostId1: state.posts.selectedPostId
    }
}

export default connect(mapStateToProps)(PostDetail)