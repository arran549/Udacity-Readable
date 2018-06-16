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
import PageNotFound from './components/PageNotFound'

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
                        <Route path="/:category/:id/edit" component={EditPost} />
                        {this.props.categories.map((cat) => ( 
                                <Route key={cat.path} path={`/${cat.path}/:id`} component={PostDetail} />
                        ))}
                        {this.props.categories.map((cat) => ( 
                            <Route key={cat.path} exact path={`/${cat.path}`} component={Posts} />
                        ))}
                        <Route exact path="/" component={Posts} />
                        <Route exact path="/all" component={Posts} />
                        <Route exact path="/posts"  component={Posts} />
                        <Route component={PageNotFound} />
                    </Switch>
            </div>
        ) : <div> ...Loading </div>;
    }
}

const mapStateToProps = (state, props) => ({
    isReady: state.posts.isReady,
    categories: state.navigation.categories
})

const mapDispatchToProps = dispatch => ({
    getPosts: () => getAllPosts().then((posts) => dispatch(fetchAllPostsActionCreator(posts))),
    updateCategories: () => getCategories().then((categories) => dispatch(updateCategoriesActionCreator(categories)))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
