import { combineReducers } from 'redux'

//import {
//    ADD_RECIPE,
//    REMOVE_FROM_CALENDAR
//} from '../actions'

import { FETCH_ALL_POSTS } from '../actions/posts.actions'

const initialPostsState = {
    all: []
}

function posts (state = initialPostsState, action) {
    switch(action.type) {
        case FETCH_ALL_POSTS: {
            return {
                ...state,
                all: action.posts
            }
            break;
        }
        default:
            return state;
    }
}

export default combineReducers({ 
    posts
});