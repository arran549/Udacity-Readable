
export const UPDATE_COMMENTS_FOR_POST = 'UPDATE_COMMENTS_FOR_POST'
export const VOTE_ON_COMMENT = 'VOTE_ON_COMMENT'
export const ADD_COMMENT_TO_POST = 'ADD_COMMENT_TO_POST'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const EDIT_COMMENT_TO_POST = 'EDIT_COMMENT_TO_POST'

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

export const addCommentToPostActionCreator = (model) => {

    model.parentDeleted = false;
    model.voteScore = 0;
    model.deleted = false;


    return {
        type: ADD_COMMENT_TO_POST,
        model
    }
}

export const deleteCommentActionCreator = (postId, commentId) => {
    return {
        type: DELETE_COMMENT,
        commentId,
        postId
    }
}

export const editCommentToPostActionCreator = (model) => {
    return {
        type: EDIT_COMMENT_TO_POST,
        model
    }
}