
export const UPDATE_COMMENTS_FOR_POST = 'UPDATE_COMMENTS_FOR_POST'
export const VOTE_ON_COMMENT = 'VOTE_ON_COMMENT'

export const updateCommentsForPostActionCreator = (postId, comments) => {
    console.log("creator: ", postId, comments);
    return {
        type: UPDATE_COMMENTS_FOR_POST,
        postId,
        comments
    }
}

export const voteOnPostActionCreator = (id, option) => {
    return {
        type: VOTE_ON_COMMENT,
        id,
        option
    }
}