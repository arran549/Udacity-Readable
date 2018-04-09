export const SELECT_CATEGORY = 'SELECT_CATEGORY'
export const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES'


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