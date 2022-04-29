const initialState = {
    mattresses: [],
    sizeFilter: [],
    producerFilter: [],
    sorting: null,
    check: false,
    selectedMattress: {},
    comments: []

}

export const mattressListActionTypes = {
    ADD_MANY_MATTRESSES: 'ADD_MANY_MATTRESSES',
    FILTER_MATTRESSES_ON_SIZE: 'FILTER_MATTRESSES_ON_SIZE',
    FILTER_MATTRESSES_ON_PRODUCER: 'FILTER_MATTRESSES_ON_PRODUCER',
    SORTING_MATTRESSES_ON_PRICE: 'SORTING_MATTRESSES_ON_PRICE',
    ADD_SELECTED_MATTRESS: 'ADD_SELECTED_MATTRESS',
    ADD_COMMENTS_BY_MATTRESS_ID: 'ADD_COMMENTS_BY_MATTRESS_ID'
}

const selectedFilters = (state, action) => {
    if (state.includes(action)) {
        return state.filter(el => el !== action)
    } else {
        return [...state, action]
    }
}

const filteredContainer = (mattresses, producerFilter, sizeFilter, sorting) => {
    let filterMattresses = filteredMattresses(mattresses, producerFilter, sizeFilter)
    if ( sorting == "ascending" ) {
        return filterMattresses.sort((a, b) => a.price - b.price)
    } else if (sorting == "descending" ) {
        return filterMattresses.sort((a, b) => b.price - a.price)
    } else {
        return filterMattresses
    }
}

const filteredMattresses = (mattresses, producerFilter, sizeFilter) => {
    if (sizeFilter.length == 0 && producerFilter.length == 0) {
        return mattresses
    } else if (sizeFilter.length == 0) {
        return mattresses.filter(el => producerFilter.includes(el.producer))
    } else if (producerFilter.length == 0) {
        return mattresses.filter(el => sizeFilter.includes(el.size))
    } else {
        return mattresses.filter(el => 
            sizeFilter.includes(el.size) && producerFilter.includes(el.producer)
        )
    }
}

export const mattressListReducer = (state = initialState, action) => {
    switch (action.type) {
        case mattressListActionTypes.ADD_MANY_MATTRESSES:
            return {
                ...state, 
                mattresses: action.payload,
                sizeFilter: [],
                producerFilter: [],
                sorting: null
            }
        case mattressListActionTypes.FILTER_MATTRESSES_ON_SIZE:
            const sizeFilter = selectedFilters(state.sizeFilter, action.currentFilter)
            return {
                ...state,
                sizeFilter: sizeFilter,
                mattresses: filteredContainer(
                    action.mattresses, 
                    state.producerFilter, 
                    sizeFilter, 
                    state.sorting
                )
            }
        case mattressListActionTypes.FILTER_MATTRESSES_ON_PRODUCER:
            const producerFilter = selectedFilters(state.producerFilter, action.currentFilter)
            return {
                ...state,
                producerFilter: producerFilter,
                mattresses: filteredContainer(
                    action.mattresses, 
                    producerFilter, 
                    state.sizeFilter, 
                    state.sorting
                )
            }
        case mattressListActionTypes.SORTING_MATTRESSES_ON_PRICE:
            return {
                ...state,
                mattresses: filteredContainer(
                    action.mattresses, 
                    state.producerFilter, 
                    state.sizeFilter, 
                    action.selectedSort
                ),
                sorting: action.selectedSort
            }
        case mattressListActionTypes.ADD_SELECTED_MATTRESS:
            return {
                ...state, 
                selectedMattress: action.mattresses.filter(mattress => mattress.id === action.params).pop()
            }
        case mattressListActionTypes.ADD_COMMENTS_BY_MATTRESS_ID:
            return {
                ...state,
                comments: action.comments.filter(comment => comment.postId === action.params)
            }
        default:
            return state;
    }
}

export const addManyMattress = (payload) => ({type: mattressListActionTypes.ADD_MANY_MATTRESSES, payload})
export const filterMattressesOnSize = (mattresses, currentFilter) => ({
    type: mattressListActionTypes.FILTER_MATTRESSES_ON_SIZE, 
    mattresses, 
    currentFilter
})
export const filterMattressesOnProducer = (mattresses, currentFilter) => ({
    type: mattressListActionTypes.FILTER_MATTRESSES_ON_PRODUCER, 
    mattresses, 
    currentFilter
})
export const sortingMattressesOnPrice = (mattresses, selectedSort) => ({
    type: mattressListActionTypes.SORTING_MATTRESSES_ON_PRICE, 
    mattresses,
    selectedSort
})
export const addSelectedMattress = (mattresses, params) => ({
    type: mattressListActionTypes.ADD_SELECTED_MATTRESS,
    mattresses,
    params
})
export const addCommentsByMattressId = (comments, params) => ({
    type: mattressListActionTypes.ADD_COMMENTS_BY_MATTRESS_ID,
    comments,
    params
})