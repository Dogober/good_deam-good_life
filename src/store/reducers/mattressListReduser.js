const initialState = {
    mattresses: []
}

export const mattressListActionTypes = {
    ADD_MANY_MATTRESSES: 'ADD_MANY_MATTRESSES',
    FILTER_MATTRESSES_ON_SIZE: 'FILTER_MATTRESSES_ON_SIZE'
}

export const mattressListReducer = (state = initialState, action) => {
    switch (action.type) {
        case mattressListActionTypes.ADD_MANY_MATTRESSES:
            return {...state, mattresses: [...state.mattresses, ...action.payload]}
        case mattressListActionTypes.FILTER_MATTRESSES_ON_SIZE:
            return {...state, mattresses: state.mattresses.filter(mattress => mattress.size === action.payload)}
        default:
            return state;
    }
}

export const addManyMattress = (payload) => ({type: mattressListActionTypes.ADD_MANY_MATTRESSES, payload})
export const filterMattressesOnSize = (payload) => ({type: mattressListActionTypes.FILTER_MATTRESSES_ON_SIZE, payload})

