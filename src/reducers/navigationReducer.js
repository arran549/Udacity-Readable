import { SELECT_CATEGORY, UPDATE_CATEGORIES } from '../actions/actionTypes'

const initialNavigationState = {
    selectedCategory: 'all',
    categories: []
}

export function navigation (state = initialNavigationState, action) {
    switch(action.type) {
        case SELECT_CATEGORY: {
            return {
                ...state,
                selectedCategory: action.category
            }
        }
        case UPDATE_CATEGORIES: {
            return {
                ...state,
                categories: action.categories
            }
        }
        default:
            return state;
    }
}
