import React from 'react'
import { connect } from 'react-redux'
import VoteOnPost from './VoteOnPost'
import PostComments from './PostComments'
import { getAllPosts } from './../readableAPI'
import { PageHeader, Panel, Button, Badge, Row, Col } from 'react-bootstrap'
import { fetchAllPostsActionCreator } from '../actions/posts.actions'


class Posts extends React.Component {

    componentDidMount() {

        getAllPosts().then((posts) => {
            console.log('posts', posts)
            this.props.getPosts(posts)
        })
    }

    render() {

        //console.log('Posts.Props: ', this.props);

        return (
            <div>
                <PageHeader>Posts</PageHeader>
                {  this.props.allPosts.map( (post) => ( 
                    <div key={post.id}>
                        <Panel>
                            <Panel.Heading>{post.title}</Panel.Heading>
                            <Panel.Body>
                            <br />
                            <Row>
                                <Col md={8}>{post.body}</Col>
                                <Col md={2}>
                                    <PostComments post={post}></PostComments>
                                </Col>
                                <Col>
                                    <VoteOnPost post={post}></VoteOnPost>
                                </Col>
                            </Row>
                            </Panel.Body>
                            
                        </Panel>
                    </div>
                ))}
                
            </div>
        )
    }

}

const mapStateToProps = (state, props) => ({
    allPosts: state.posts.all || []
})

const mapDispatchToProps = dispatch => ({
    getPosts: (posts) => dispatch(fetchAllPostsActionCreator(posts))
})
export default connect(mapStateToProps, mapDispatchToProps)(Posts)
