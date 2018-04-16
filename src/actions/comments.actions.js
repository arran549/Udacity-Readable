
export const UPDATE_COMMENTS_FOR_POST = 'UPDATE_COMMENTS_FOR_POST'

export const updateCommentsForPostActionCreator = (postId, comments) => {
    console.log("creator: ", postId, comments);
    return {
        type: UPDATE_COMMENTS_FOR_POST,
        postId,
        comments
    }
}