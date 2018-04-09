import { combineReducers } from 'redux'

//import {
//    ADD_RECIPE,
//    REMOVE_FROM_CALENDAR
//} from '../actions'

import { FETCH_ALL_POSTS, VOTE_ON_POST, DELETE_POST } from '../actions/posts.actions'

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
        }
        case VOTE_ON_POST: {

            const increment = action.option === 'upVote' ? 1 : -1
            return {
                ...state,
                all: state.all.map((post, i) => post.id === action.id ? {...post, voteScore: post.voteScore += increment} : post )
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                all: state.all.filter((post) => post.id !== action.id)
            }
        }
        default:
            return state;
    }
}

export default combineReducers({ 
    posts
});