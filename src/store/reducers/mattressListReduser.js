const initialState = {
    mattresses: [],
    sizeFilter: [],
    producerFilter: []
}

export const mattressListActionTypes = {
    ADD_MANY_MATTRESSES: 'ADD_MANY_MATTRESSES',
    FILTER_MATTRESSES_ON_SIZE: 'FILTER_MATTRESSES_ON_SIZE',
    FILTER_MATTRESSES_ON_PRODUCER: 'FILTER_MATTRESSES_ON_PRODUCER'
}

const selectedFilters = (state, action) => {
    if (state.includes(action)) {
        return state.filter(el => el !== action)
    } else {
        return [...state, action]
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
        return mattresses.filter(el => sizeFilter.includes(el.size) && producerFilter.includes(el.producer))
    }
}

export const mattressListReducer = (state = initialState, action) => {
    switch (action.type) {
        case mattressListActionTypes.ADD_MANY_MATTRESSES:
            return {...state, mattresses: action.payload}
        case mattressListActionTypes.FILTER_MATTRESSES_ON_SIZE:
            const sizeFilter = selectedFilters(state.sizeFilter, action.currentFilter)
            return {
                ...state,
                sizeFilter: sizeFilter,
                mattresses: filteredMattresses(action.mattresses, state.producerFilter, sizeFilter)
            }
        case mattressListActionTypes.FILTER_MATTRESSES_ON_PRODUCER:
            const producerFilter = selectedFilters(state.producerFilter, action.currentFilter)
            return {
                ...state,
                producerFilter: producerFilter,
                mattresses: filteredMattresses(action.mattresses, producerFilter, state.sizeFilter)
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