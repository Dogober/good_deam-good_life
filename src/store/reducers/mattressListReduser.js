const initialState = {
    mattresses: [],
    sizeFilter: [],
    producerFilter: [],
    sorting: null,
    homePageIsLoading: true
}

export const mattressListActionTypes = {
    ADD_MANY_MATTRESSES: 'ADD_MANY_MATTRESSES',
    FILTER_MATTRESSES_ON_SIZE: 'FILTER_MATTRESSES_ON_SIZE',
    FILTER_MATTRESSES_ON_PRODUCER: 'FILTER_MATTRESSES_ON_PRODUCER',
    SORTING_MATTRESSES_ON_PRICE: 'SORTING_MATTRESSES_ON_PRICE',
    HOME_PAGE_IS_LOADING: 'HOME_PAGE_IS_LOADING'
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
                mattresses: action.payload,
                sizeFilter: [],
                producerFilter: [],
                sorting: null,
                homePageIsLoading: false
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
        default:
            return state;
    }
}

export const addManyMattress = (payload) => ({
    type: mattressListActionTypes.ADD_MANY_MATTRESSES, 
    payload
})
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