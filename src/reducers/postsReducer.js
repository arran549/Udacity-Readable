import { FETCH_ALL_POSTS, VOTE_ON_POST, DELETE_POST, SELECT_POST, CREATE_POST, EDIT_POST } from '../actions/actionTypes'
import { UPDATE_COMMENTS_FOR_POST, ADD_COMMENT_TO_POST, DELETE_COMMENT, EDIT_COMMENT_TO_POST } from '../actions/actionTypes'

const initialPostsState = {
    all: [],
    selectedPostId: null,
    isReady: false
}

export function posts (state = initialPostsState, action) {
    switch(action.type) {
        case FETCH_ALL_POSTS: {
            return {
                ...state,
                all: action.posts,
                isReady: true
            }
        }
        case VOTE_ON_POST: {

            const increment = action.option === 'upVote' ? 1 : -1
            return {
                ...state,
                all: state.all.map((post, i) => post.id === action.id ? {...post, voteScore: post.voteScore += increment} : post )
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                all: state.all.filter((post) => post.id !== action.id)
            }
        }
        case DELETE_COMMENT: {
            return {
                ...state,
                all: state.all.map((post, i) => post.id === action.postId ? {...post, comments: post.comments.filter(comment => comment !== action.commentId), commentCount: post.commentCount - 1 } : post)
            }
        }
        case SELECT_POST: {
            return {
                ...state,
                selectedPostId: action.id
            }
        }
        case ADD_COMMENT_TO_POST: {
            return {
                ...state,
                all: state.all.map((post, i) => post.id == action.model.parentId ? 
                    { 
                        ...post, 
                        commentCount: post.commentCount += 1,
                        comments: [...post.comments, action.model.id] 
                    } 
                    : post )
            }
        }
        case UPDATE_COMMENTS_FOR_POST: {

            var commentIds = action.comments.map((comment) => (comment.id))

            return {
                ...state,
                all: state.all.map((post, i) => post.id == action.postId ? {
                    ...post,
                    comments: [...commentIds]
                } : post )
            }
        }
        case CREATE_POST: {
            return {
                ...state,
                all: [...state.all, action.post]
            }
        }
        case EDIT_POST: {

            const { id, author, title, body } = action.postFields;

            return {
                ...state,
                all: state.all.map((post, i) => post.id === id ? { ...post, author: author, body: body, title: title } : { ...post})
            }
        }
        default:
            return state;
    }
}
