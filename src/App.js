import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Posts from './components/Posts'
import MainMenu from './components/MainMenu'
import { getCategories } from './readableAPI'
import { Route, Switch } from 'react-router-dom'
import { fetchAllPostsActionCreator } from './actions/posts.actions'
import { updateCategoriesActionCreator } from './actions/navigation.actions'
import { getAllPosts } from './readableAPI'
import PostDetail from './components/PostDetail';

class App extends Component {

    
    componentDidMount() {
        this.props.getPosts();
        this.props.updateCategories();
    }

    render() {

        return (
            <div>
                <MainMenu></MainMenu>
                <Switch>
                    <Route path="/posts/:id" component={PostDetail} />
                    <Route exact path="/" component={Posts} />
                    <Route exact path="/posts"  component={Posts} />
                    <Route path="/:category" component={Posts} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({

})

const mapDispatchToProps = dispatch => ({
    getPosts: () => getAllPosts().then((posts) => dispatch(fetchAllPostsActionCreator(posts))),
    updateCategories: () => getCategories().then((categories) => dispatch(updateCategoriesActionCreator(categories)))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
