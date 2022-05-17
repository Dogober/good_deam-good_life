const initialState = {
    purchasedItems: [],
    numberPurchasedItems: null,
    purchasedItemsCost: null
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
const numberPurchasedItemsCalc = (purchasedItems) => {
    let rezult = 0;
    return purchasedItems.reduce((firstItem, currentItem) => 
    firstItem + currentItem.number, rezult
    )
}
const purchasedItemsCostCalc = (purchasedItems) => {
    let rezult = 0;
    return purchasedItems.reduce((firstItem, currentItem) => 
    firstItem + currentItem.purchasedItem.price * currentItem.number, rezult
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
                        purchasedItem: action.payload,
                        number: 1
                    }
                ],
                numberPurchasedItems: state.numberPurchasedItems + 1,
                purchasedItemsCost: state.purchasedItemsCost + action.payload.price
            }
        case cartActionTypes.CHANGE_NUMBER_PURCHASED_ITEM:
            return {
                ...state,
                purchasedItems: [...numberChange(state.purchasedItems, action.id, action.changes)],
                numberPurchasedItems: numberPurchasedItemsCalc(state.purchasedItems),
                purchasedItemsCost: purchasedItemsCostCalc(state.purchasedItems)
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
