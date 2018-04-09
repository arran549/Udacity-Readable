import React from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import { getAllPosts } from './../readableAPI'
import { PageHeader } from 'react-bootstrap'
import { fetchAllPostsActionCreator } from '../actions/posts.actions'


class Posts extends React.Component {

    componentDidMount() {

        getAllPosts().then((posts) => {
            console.log('posts', posts)
            this.props.getPosts(posts)
        })
    }

    render() {

        return (
            <div>
                <PageHeader>Posts</PageHeader>
                {  this.props.allPosts.map( (post) => ( 
                    <div key={post.id}>
                        <Post post={post}></Post>
                    </div>

                ))}
                
            </div>
        )
    }

}

const mapStateToProps = (state, props) => ({
    allPosts: state.posts.all || [],
    selectedCategory: state.navigation.selectedCategory
})

const mapDispatchToProps = dispatch => ({
    getPosts: (posts) => dispatch(fetchAllPostsActionCreator(posts))
    
})
export default connect(mapStateToProps, mapDispatchToProps)(Posts)
