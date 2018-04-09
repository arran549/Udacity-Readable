
export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS'
export const UPDATE_POST = 'UPDATE_POST'

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