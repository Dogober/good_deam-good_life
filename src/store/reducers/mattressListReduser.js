const initialState = {
    mattresses: [],
    sizeFilter: [],
}

export const mattressListActionTypes = {
    ADD_MANY_MATTRESSES: 'ADD_MANY_MATTRESSES',
    FILTER_MATTRESSES_ON_SIZE: 'FILTER_MATTRESSES_ON_SIZE',
}

const currentSize = (state, action) => {
    if (state.includes(action)) {
        return state.filter(el => el !== action)
    } else {
        return [...state, action]
    }
}

export const mattressListReducer = (state = initialState, action) => {
    switch (action.type) {
        case mattressListActionTypes.ADD_MANY_MATTRESSES:
            return {...state, mattresses: action.payload}
        case mattressListActionTypes.FILTER_MATTRESSES_ON_SIZE:
            const sizeFilter = currentSize(state.sizeFilter, action.currentFilter)
            return {
                ...state,
                sizeFilter: sizeFilter,
                mattresses: action.mattresses.filter(mattress => sizeFilter.includes(mattress.size))
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
// mattresses.filter(mattress => mattress.size === action.currentFilter)