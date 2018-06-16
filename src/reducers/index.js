import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'




import { posts } from './postsReducer'
import { comments } from './commentsReducer'
import { navigation } from './navigationReducer'

export default combineReducers({ 
    posts,
    navigation,
    comments
});