const inisialState = {
    selectedMattress: {},
    comments: [],
}

const mattressIdActionTypes = {
    ADD_SELECTED_MATTRESS: 'ADD_SELECTED_MATTRESS',
    ADD_COMMENTS_BY_MATTRESS_ID: 'ADD_COMMENTS_BY_MATTRESS_ID'
}

export const mattressIdReducer = (state = inisialState, action) => {
    switch (action.type) {
        case mattressIdActionTypes.ADD_SELECTED_MATTRESS:
            return {
                ...state,
                selectedMattress: action.mattresses.filter(mattress => mattress.id === action.params).pop()
            }
        case mattressIdActionTypes.ADD_COMMENTS_BY_MATTRESS_ID:
            return {
                ...state,
                comments: action.comments.filter(comment => comment.postId === action.params)
            }
        default:
            return state;
    }
}

export const addSelectedMattress = (mattresses, params) => ({
    type: mattressIdActionTypes.ADD_SELECTED_MATTRESS,
    mattresses,
    params
})
export const addCommentsByMattressId = (comments, params) => ({
    type: mattressIdActionTypes.ADD_COMMENTS_BY_MATTRESS_ID,
    comments,
    params
})