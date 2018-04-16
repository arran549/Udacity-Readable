import React from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import { Link, withRouter } from 'react-router-dom'
import { Panel, PageHeader, Well, Button } from 'react-bootstrap'
import { selectCategoryActionCreator } from '../actions/navigation.actions'



class Posts extends React.Component {

    componentDidMount() {

        const { match: { params } } = this.props;

        if(params.category) {
            this.props.selectCategory(params.category)
        }
    }

    onSelectPosts () {
            this.props.selectCategory('all');
    }

    render() {

        const { posts } = this.props

        return (
            <div>
                <PageHeader>Posts</PageHeader>
                <Panel>
                    <Panel.Heading>
                        <Panel.Title componentClass="h1">{this.props.selectedCategory} posts</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                    { posts.length > 0 || (<Well>There are no posts to display</Well>) }
                    {  posts && posts.map( (post) => ( 
                        <div key={post.id}>
                            <Post post={post}></Post>
                        </div>

                    ))}
                    <Link to="/posts" onClick={() => this.onSelectPosts()}>
                        <Button>Udacity Posts</Button>
                    </Link>

                    </Panel.Body>
                </Panel>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        posts: state.navigation.selectedCategory === 'all' ? state.posts.all : state.posts.all.filter((post) => post.category === state.navigation.selectedCategory),
        selectedCategory: state.navigation.selectedCategory
    }
}

const mapDispatchToProps = dispatch => ({
    selectCategory: (selectedCategory) => dispatch(selectCategoryActionCreator(selectedCategory))    
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Posts))
