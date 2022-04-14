const initialState = {
    mattresses: []
}

export const mattressListActionTypes = {
    ADD_MANY_MATTRESSES: 'ADD_MANY_MATTRESSES',
}

export const mattressListReducer = (state = initialState, action) => {
    switch (action.type) {
        case mattressListActionTypes.ADD_MANY_MATTRESSES:
            return {...state, mattresses: [...state.mattresses, ...action.payload]}
        default:
            return state;
    }
}

export const addManyMattress = (payload) => ({type: mattressListActionTypes.ADD_MANY_MATTRESSES, payload})
