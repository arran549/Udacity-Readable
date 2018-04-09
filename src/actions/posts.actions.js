
export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS'
export const UPDATE_POST = 'UPDATE_POST'
export const VOTE_ON_POST = 'VOTE_ON_POST'

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