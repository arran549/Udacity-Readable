import { UPDATE_COMMENTS_FOR_POST, ADD_COMMENT_TO_POST, DELETE_COMMENT, EDIT_COMMENT_TO_POST, VOTE_ON_COMMENT } from '../actions/actionTypes'

const intialCommentsState = {
    byId: {},
    allIds: {}
}

export function comments (state = intialCommentsState, action) {
    switch(action.type) {
        case UPDATE_COMMENTS_FOR_POST: {

            const updated = {
                ...state,
                byId: {
                    ...state.byId,
                    ...action.comments.reduce((obj, item) => {
                        obj[item.id] = item
                        return obj
                    }, {})
                },
                allIds: [...state.allIds, ...action.comments.map((comment) => (comment.id))]
            }

            return updated;
        }
        case ADD_COMMENT_TO_POST: {

            return {
                ...state,
                allIds: [...state.allIds, action.model.id],
                byId: { ...state.byId, [action.model.id]: action.model }
            }
        }
        case EDIT_COMMENT_TO_POST: {
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.model.id] : action.model
                }
            }
        }
        case DELETE_COMMENT: {

            delete state.byId[action.commentId];

            return {
                ...state,
                allIds: state.allIds.filter((id) => id !== action.commentId),
                byId: {
                    ...state.byId
                }
            }
        }
        case VOTE_ON_COMMENT: {

            const increment = action.option === 'upVote' ? 1 : -1

            const comment = state.byId[action.id]

            const updatedComment = {
                 ...comment,
                 voteScore: comment.voteScore + increment
            }

            return {
                ...state,   
                byId: {
                    ...state.byId,
                    [action.id] : updatedComment
                }  
            }
        }
        
        default:
            return state;
    }
}