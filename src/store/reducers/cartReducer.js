const inisialState = {
    purchasedItems: []
}

const cartActionTypes = {
    ADD_TO_CART: 'ADD_TO_CART',
    CHANGE_NUMBER_PURCHASED_ITEM: 'CHANGE_NUMBER_PURCHASED_ITEM',
    DELETE_PURCHASED_ITEM: 'DELETE_PURCHASED_ITEM'
}

const numberChange = (ar, id, changes) => {
    for (let i = 0; i < ar.length; i++) {
        if (ar[i].purchasedItem.id === id && changes === -1 && ar[i].number == 1) {
            return ar
        } else if (ar[i].purchasedItem.id === id) {
            ar[i].number += changes
            return ar
        }
    }
}

export const cartReducer = (state = inisialState, action) => {
    switch (action.type) {
        case cartActionTypes.ADD_TO_CART:
            return {
                ...state,
                purchasedItems: [
                    ...state.purchasedItems, 
                    {
                        purchasedItem: action.payload,
                        number: 1
                    }
                ]
            }
        case cartActionTypes.CHANGE_NUMBER_PURCHASED_ITEM:
            return {
                ...state,
                purchasedItems: [...numberChange(state.purchasedItems, action.id, action.changes)]
            }
        case cartActionTypes.DELETE_PURCHASED_ITEM:
            return {
                ...state,
                purchasedItems: state.purchasedItems.filter(item => item.purchasedItem.id !== action.id)
            }
        default:
            return state;
    }
}

export const addToCart = (payload) => ({type: cartActionTypes.ADD_TO_CART, payload})
export const deletePurchasedItem = (id) => ({type: cartActionTypes.DELETE_PURCHASED_ITEM, id})
export const changeNumberPurchasedItem = (id, changes) => ({
    type: cartActionTypes.CHANGE_NUMBER_PURCHASED_ITEM,
    id,
    changes
})
