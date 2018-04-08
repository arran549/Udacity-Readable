import { combineReducers } from 'redux'

//import {
//    ADD_RECIPE,
//    REMOVE_FROM_CALENDAR
//} from '../actions'

const initialPostsState = {

}

function posts (state = initialPostsState, action) {
    switch(action.type) {
        default:
            return state;
    }
}

export default combineReducers({ 
    posts
});