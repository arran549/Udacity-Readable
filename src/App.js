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

class App extends Component {

    
    componentDidMount() {
        getAllPosts().then((posts) => {
            console.log('posts', posts);
            this.props.getPosts(posts);
        });

        getCategories().then((categories) => {
            this.props.updateCategories(categories);
        })

    }

    render() {
        const categories = []
        
        getCategories().then(res => {
        categories.push(res)
        });

        

        return (
        <div >
            <MainMenu></MainMenu>
            <Switch>
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
    getPosts: (posts) => dispatch(fetchAllPostsActionCreator(posts)),
    updateCategories: (categories) => dispatch(updateCategoriesActionCreator(categories))
    
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
