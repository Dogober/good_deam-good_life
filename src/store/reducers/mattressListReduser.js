const initialState = {
    mattresses: [],
    filter800x2000: false,
    filter900x2000: false,
    filter1800x2000: false,
}

export const mattressListActionTypes = {
    ADD_MANY_MATTRESSES: 'ADD_MANY_MATTRESSES',
    FILTER_800X2000: 'FILTER_800X2000',
    FILTER_900X2000: 'FILTER_900X2000',
    FILTER_1800X2000: 'FILTER_1800X2000'
}

export const mattressListReducer = (state = initialState, action) => {
    switch (action.type) {
        case mattressListActionTypes.ADD_MANY_MATTRESSES:
            return {...state, mattresses: [...action.payload]}
        case mattressListActionTypes.FILTER_800X2000:
            return {...state, mattresses: [], filter800x2000: action.payload}
        case mattressListActionTypes.FILTER_900X2000:
            return {...state, mattresses: [], filter900x2000: action.payload}
        case mattressListActionTypes.FILTER_1800X2000:
            return {...state, mattresses: [], filter1800x2000: action.payload}            
        default:
            return state;
    }
}

export const addManyMattress = (payload) => ({type: mattressListActionTypes.ADD_MANY_MATTRESSES, payload})
export const filterMattressesOnSize = (payload) => ({type: mattressListActionTypes.FILTER_MATTRESSES_ON_SIZE, payload})