import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Posts from './components/Posts'
import MainMenu from './components/MainMenu'
import { getCategories } from './readableAPI'
import { Router, Route, Switch, withRouter } from 'react-router-dom'
import { fetchAllPostsActionCreator } from './actions/posts.actions'
import { updateCategoriesActionCreator } from './actions/navigation.actions'
import { getAllPosts } from './readableAPI'
import PostDetail from './components/PostDetail';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';

class App extends Component {

    
    componentDidMount() {
        this.props.getPosts();
        this.props.updateCategories();
    }

    render() {

        return this.props.isReady ? (
            <div>
                <MainMenu></MainMenu>
                    <Switch>
                        <Route path="/posts/create" component={CreatePost} />
                        <Route path="/posts/:id/edit" component={EditPost} />
                        <Route path="/posts/:id" component={PostDetail} />
                        <Route exact path="/" component={Posts} />
                        <Route exact path="/posts"  component={Posts} />
                        <Route path="/:category" component={Posts} />
                    </Switch>
            </div>
        ) : <div> ...Loading </div>;
    }
}

const mapStateToProps = (state, props) => ({
    isReady: state.posts.isReady
})

const mapDispatchToProps = dispatch => ({
    getPosts: () => getAllPosts().then((posts) => dispatch(fetchAllPostsActionCreator(posts))),
    updateCategories: () => getCategories().then((categories) => dispatch(updateCategoriesActionCreator(categories)))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
