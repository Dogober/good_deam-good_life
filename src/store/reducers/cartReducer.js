const initialState = {
    purchasedItems: [],
    purchasedItemsNumber: 0,
    purchasedItemsCost: 0
}

const cartActionTypes = {
    ADD_TO_CART: 'ADD_TO_CART',
    CHANGE_NUMBER_PURCHASED_ITEM: 'CHANGE_NUMBER_PURCHASED_ITEM',
    DELETE_PURCHASED_ITEM: 'DELETE_PURCHASED_ITEM',
    CLEAR_CART: 'CLEAR_CART'
}

const numberChange = (ar, id, changes) => {
    for (let i = 0; i < ar.length; i++) {
        if (ar[i].mattress.id === id && changes === -1 && ar[i].number === 1) {
            return ar
        } else if (ar[i].mattress.id === id) {
            ar[i].number += changes
            return ar
        }
    }
}
const purchasedItemsNumberCalc = (purchasedItems) => {
    let rezult = 0;
    return purchasedItems.reduce((firstItem, currentItem) => 
    firstItem + currentItem.number, rezult
    )
}
const purchasedItemsCostCalc = (purchasedItems) => {
    let rezult = 0;
    return purchasedItems.reduce((firstItem, currentItem) => 
    firstItem + currentItem.mattress.price * currentItem.number, rezult
    )
}
export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case cartActionTypes.ADD_TO_CART:
            return {
                ...state,
                purchasedItems: [
                    ...state.purchasedItems, 
                    {
                        mattress: action.payload,
                        number: 1
                    }
                ],
                purchasedItemsNumber: state.purchasedItemsNumber + 1,
                purchasedItemsCost: state.purchasedItemsCost + action.payload.price
            }
        case cartActionTypes.CHANGE_NUMBER_PURCHASED_ITEM:
            return {
                ...state,
                purchasedItems: [...numberChange(state.purchasedItems, action.id, action.changes)],
                purchasedItemsNumber: purchasedItemsNumberCalc(state.purchasedItems),
                purchasedItemsCost: purchasedItemsCostCalc(state.purchasedItems)
            }
        case cartActionTypes.DELETE_PURCHASED_ITEM:
            const deletedPurchasedItem = state.purchasedItems.filter(item => 
                item.mattress.id === action.mattress.id).pop()
            return {
                ...state,
                purchasedItems: state.purchasedItems.filter(item => item.mattress.id !== action.mattress.id),
                purchasedItemsNumber: state.purchasedItemsNumber - deletedPurchasedItem.number,
                purchasedItemsCost: state.purchasedItemsCost - action.mattress.price * deletedPurchasedItem.number
            }
        case cartActionTypes.CLEAR_CART:
            return {
                ...state,
                purchasedItems: [],
                purchasedItemsNumber: 0,
                purchasedItemsCost: 0
            }
        default:
            return state;
    }
}

export const addToCart = (payload) => ({type: cartActionTypes.ADD_TO_CART, payload})
export const deletePurchasedItem = (mattress) => ({type: cartActionTypes.DELETE_PURCHASED_ITEM, mattress})
export const changeNumberPurchasedItem = (id, changes) => ({
    type: cartActionTypes.CHANGE_NUMBER_PURCHASED_ITEM,
    id,
    changes
})
export const clearCart = () => ({type: cartActionTypes.CLEAR_CART})
