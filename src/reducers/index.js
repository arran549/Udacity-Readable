import { combineReducers } from 'redux'

//import {
//    ADD_RECIPE,
//    REMOVE_FROM_CALENDAR
//} from '../actions'

import { FETCH_ALL_POSTS, VOTE_ON_POST, DELETE_POST } from '../actions/posts.actions'

import { SELECT_CATEGORY, UPDATE_CATEGORIES } from '../actions/navigation.actions'

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

const initialNavigationState = {
    selectedCategory: 'all',
    categories: []
}

function navigation (state = initialNavigationState, action) {
    switch(action.type) {
        case SELECT_CATEGORY: {
            return {
                ...state,
                selectedCategory: action.category
            }
        }
        case UPDATE_CATEGORIES: {
            return {
                ...state,
                categories: action.categories
            }
        }
        default:
            return state;
    }
}

export default combineReducers({ 
    posts,
    navigation
});