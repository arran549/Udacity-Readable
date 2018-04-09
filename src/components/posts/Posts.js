import React from 'react'
import { connect } from 'react-redux'
//import * as ReadableAPI from './../../readableAPI'
import { getAllPosts } from './../../readableAPI'
import { PageHeader, Panel, Button, Badge, Row, Col } from 'react-bootstrap'
import { fetchAllPostsActionCreator } from '../../actions/posts.actions'


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
                <ol>
                {  this.props.allPosts.map( (post) => ( 
                    <Panel>
                        <Panel.Heading key={post.id}>{post.title}</Panel.Heading>
                        <Panel.Body>
                        <br />
                        <Row>
                            <Col md={8}>{post.body}</Col>
                            <Col md={2}>
                                <Badge>Comments: {post.commentCount}</Badge>
                                
                            </Col>
                            <Col>
                                    <Badge>{post.voteScore}</Badge>
                                    <Button bsStyle="primary" >Vote Up</Button>
                                    <Button bsStyle="default">Vote Down</Button>
                                    
                            </Col>
                        </Row>
                        </Panel.Body>
                        
                    </Panel>
                ))}
                </ol>
            </div>
        )
    }

}

const mapStateToProps = (state, props) => (
    {
    allPosts: state.posts.all || []
})

const mapDispatchToProps = dispatch => ({
    getPosts: (posts) => dispatch(fetchAllPostsActionCreator(posts))
})
export default connect(mapStateToProps, mapDispatchToProps)(Posts)
