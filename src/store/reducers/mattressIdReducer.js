const inisialState = {
    selectedMattress: null,
    comments: [],
    error: null,
    loading: true,
    itemsInTheCart: []
}

const mattressIdActionTypes = {
    ADD_SELECTED_MATTRESS: 'ADD_SELECTED_MATTRESS',
    ADD_COMMENTS_BY_MATTRESS_ID: 'ADD_COMMENTS_BY_MATTRESS_ID',
    COMMENTS_ERROR: 'CATCH_ERROR',
    ADD_TO_BASKET: 'ADD_TO_BASKET'
}

export const mattressIdReducer = (state = inisialState, action) => {
    switch (action.type) {
        case mattressIdActionTypes.ADD_SELECTED_MATTRESS:
            return {
                ...state,
                loading: true,
                selectedMattress: action.mattresses
            }
        case mattressIdActionTypes.ADD_TO_BASKET:
            return {
                ...state,
                itemsInTheCart: [...state.itemsInTheCart, state.selectedMattress],
            }
        case mattressIdActionTypes.ADD_COMMENTS_BY_MATTRESS_ID:
            return {
                ...state,
                comments: action.comments,
                error: null,
                loading: false
            }
        case mattressIdActionTypes.COMMENTS_ERROR:
            return {
                ...state,
                error: action.payload,
                comments: [],
                loading: false
            }
        default:
            return state;
    }
}

export const addToBasket = () => ({type: mattressIdActionTypes.ADD_TO_BASKET})
export const addSelectedMattress = (mattresses) => ({
    type: mattressIdActionTypes.ADD_SELECTED_MATTRESS,
    mattresses,
})
export const addCommentsByMattressId = (comments) => ({
    type: mattressIdActionTypes.ADD_COMMENTS_BY_MATTRESS_ID,
    comments,
})
export const catchError = (payload) => ({type: mattressIdActionTypes.COMMENTS_ERROR, payload})