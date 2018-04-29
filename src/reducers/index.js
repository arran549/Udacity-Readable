import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

//import {
//    ADD_RECIPE,
//    REMOVE_FROM_CALENDAR
//} from '../actions'

import { FETCH_ALL_POSTS, VOTE_ON_POST, DELETE_POST, SELECT_POST } from '../actions/posts.actions'

import { SELECT_CATEGORY, UPDATE_CATEGORIES } from '../actions/navigation.actions'

import { UPDATE_COMMENTS_FOR_POST, ADD_COMMENT_TO_POST, DELETE_COMMENT } from '../actions/comments.actions'

const initialPostsState = {
    all: [],
    selectedPostId: null
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
        case SELECT_POST: {
            return {
                ...state,
                selectedPostId: action.id
            }
        }
        case ADD_COMMENT_TO_POST: {
            return {
                ...state,
                all: state.all.map((post, i) => post.id == action.model.parentId ? 
                    { 
                        ...post, 
                        commentCount: post.commentCount += 1,
                        comments: [...post.comments, action.model.id] 
                    } 
                    : post )
            }
        }
        case UPDATE_COMMENTS_FOR_POST: {
            console.log("Update comments for post : add comment ids", action.postId, state.all);
            return {
                ...state,
                all: state.all.map((post, i) => post.id == action.postId ? {
                    ...post,
                    comments: [...post.comments || [], ...action.comments.map((comment) => (comment.id))]
                } : post )
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

const intialCommentsState = {
    posts: {},
    byId: {},
    allIds: {}
}

function comments (state = intialCommentsState, action) {
    switch(action.type) {
        case UPDATE_COMMENTS_FOR_POST: {

            console.log("Before: ", state)

            

            console.log(" asd ", new Set([...state.allIds, action.comments.map((comment) => (comment.id))]));

            const updated = {
                ...state,
                byId: {
                    ...state.byId,
                    ...action.comments.reduce((obj, item) => {
                        obj[item.id] = item
                        return obj
                    }, {})
                },
                allIds: [...state.allIds, ...action.comments.map((comment) => (comment.id))]
            }

            console.log("After:", updated);
            return updated;
        }
        case ADD_COMMENT_TO_POST: {
            console.log('state: ', state, 'model: ', action)

            const post = state.posts[action.model.parentId]

            if(post){
                console.log('adding');
                post.push(action.model) 
                state.posts[action.model.parentId] = post;
            }

            return {
                ...state,
                posts: JSON.parse(JSON.stringify(state.posts)),
                allIds: [...state.allIds, action.model.id],
                byId: { ...state.byId, [action.model.id]: action.model }
            }
        }
        case DELETE_COMMENT: {
            
        }
        
        default:
            return state;
    }
}

export default combineReducers({ 
    posts,
    navigation,
    comments
});