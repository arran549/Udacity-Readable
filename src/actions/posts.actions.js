
export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS'

export const fetchAllPostsActionCreator = (posts) => {
    console.log('fetch all posts - action creator', posts)

    return {
        type: FETCH_ALL_POSTS,
        posts: posts
    }
}