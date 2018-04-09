export const SELECT_CATEGORY = 'SELECT_CATEGORY'


export const selectCategoryActionCreator = (category) => {
    console.log('select category - action creator', category)

    return {
        type: SELECT_CATEGORY,
        category
    }
}