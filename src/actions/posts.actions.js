
export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS'
export const UPDATE_POST = 'UPDATE_POST'
export const VOTE_ON_POST = 'VOTE_ON_POST'
export const DELETE_POST = 'DELETE_POST'
export const SELECT_POST = 'SELECT_POST'
export const CREATE_POST = 'CREATE_POST'
export const EDIT_POST = 'EDIT_POST'

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