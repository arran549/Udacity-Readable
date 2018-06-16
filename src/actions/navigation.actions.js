import { SELECT_CATEGORY, UPDATE_CATEGORIES } from './actionTypes'

export const selectCategoryActionCreator = (category) => {
    console.log('select category - action creator', category)

    return {
        type: SELECT_CATEGORY,
        category
    }
}

export const updateCategoriesActionCreator = (categories) => {
    return {
        type: UPDATE_CATEGORIES,
        categories
    }
}