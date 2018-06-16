import {  UPDATE_COMMENTS_FOR_POST, VOTE_ON_COMMENT, ADD_COMMENT_TO_POST, DELETE_COMMENT, EDIT_COMMENT_TO_POST } from './actionTypes'

export const updateCommentsForPostActionCreator = (postId, comments) => {
    console.log("creator: ", postId, comments);
    return {
        type: UPDATE_COMMENTS_FOR_POST,
        postId,
        comments
    }
}

export const voteOnCommentActionCreator = (id, option) => {
    return {
        type: VOTE_ON_COMMENT,
        id,
        option
    }
}

export const addCommentToPostActionCreator = (model) => {

    model.parentDeleted = false;
    model.voteScore = 1;
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