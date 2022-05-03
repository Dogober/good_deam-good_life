const inisialState = {
    itemsInTheCart: []
}

const busketActionTypes = {
    ADD_TO_BASKET: 'ADD_TO_BASKET'
}

export const busketReducer = (state = inisialState, action) => {
    switch (action.type) {
        case busketActionTypes.ADD_TO_BASKET:
            return {
                ...state,
                itemsInTheCart: [...state.itemsInTheCart, action.payload],
            }
        default:
            return state;
    }
}

export const addToBasket = (payload) => ({type: busketActionTypes.ADD_TO_BASKET, payload})
