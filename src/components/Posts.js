import React from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import { PageHeader } from 'react-bootstrap'
import { selectCategoryActionCreator } from '../actions/navigation.actions'



class Posts extends React.Component {

    componentDidMount() {

        const { match: { params } } = this.props;

        if(params.category) {
            this.props.selectCategory(params.category)
        }
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
})

const mapDispatchToProps = dispatch => ({
    selectCategory: (selectedCategory) => dispatch(selectCategoryActionCreator(selectedCategory))    
})
export default connect(mapStateToProps, mapDispatchToProps)(Posts)
