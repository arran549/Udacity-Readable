import { FETCH_ALL_POSTS, UPDATE_POST, VOTE_ON_POST, DELETE_POST, SELECT_POST, CREATE_POST, EDIT_POST } from './actionTypes'

export const fetchAllPostsActionCreator = (posts) => {
    console.log('fetch all posts - action creator', posts)

    return {
        type: FETCH_ALL_POSTS,
        posts: posts
    }
}

export const updatePostActionCreator = (post) => {
    return {
        type: UPDATE_POST,
        post: post
    }
}

export const voteOnPostActionCreator = (id, option) => {
    return {
        type: VOTE_ON_POST,
        id,
        option
    }
}

export const deletePostActionCreator = (id) => {
    return {
        type: DELETE_POST,
        id
    }
}

export const selectPostActionCreator = (id) => {
    return {
        type: SELECT_POST,
        id
    }
}

export const createPostActionCreator = (post) => {
    return {
        type: CREATE_POST,
        post
    }
} 

export const editPostActionCreator = (postFields) => {
    return {
        type: EDIT_POST,
        postFields
    }
}