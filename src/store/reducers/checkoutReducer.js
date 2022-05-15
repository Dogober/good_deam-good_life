const fieldData = {
    value: "",
    blurHandler: false,
    minLength: 1,
    validity: false
}
const initialState = {
    formData: new Map([
        ["buyerSurname", fieldData],
        ["buyerName", fieldData],
        ["buyerPhone", {...fieldData, minLength: 13}],
        ["receiverSurname", fieldData],
        ["receiverName", fieldData],
        ["receiverPatronymic", fieldData],
        ["receiverPhone", {...fieldData, minLength: 13}],
    ]),
    delivery: "pickup",
    payment: "byCash",
    validity: null
}
const checkoutActionTypes = {
    FORM_DATA_BLUR_CHANGE: 'FORM_DATA_BLUR_CHANGE',
    FORM_DATA_VALUE_CHANGE: 'FORM_DATA_VALUE_CHANGE',
    DELIVERY_CHECK: 'DELIVERY_CHECK',
    PAYMENT_CHECK: 'PAYMENT_CHECK',
    VALIDITY_CHEK: 'VALIDITY_CHEK'
}
const updateBlurHandler = (formData, field) => {
    const mapCopy = new Map()
    for (let key of formData.keys()) {
        mapCopy.set(key, {...formData.get(key)})
    }
    if (mapCopy.get(field).value.length < mapCopy.get(field).minLength) {
        mapCopy.get(field).validity = false
    } else {
        mapCopy.get(field).validity = true
    }
    mapCopy.get(field).blurHandler = true
    return mapCopy
}
const updateValue = (formData, field, value) => {
    const mapCopy = new Map()
    for (let key of formData.keys()) {
        mapCopy.set(key, {...formData.get(key)})
    }
    if (mapCopy.get(field).value.length < mapCopy.get(field).minLength) {
        mapCopy.get(field).validity = false
    } else {
        mapCopy.get(field).validity = true
    }
    console.log(mapCopy)
    mapCopy.get(field).value = value
    return mapCopy
}
const formDataValidity = (formData) => {
    
    for (let key of formData.keys()) {
        if (formData.get(key).validity !== true) {
            return false
        }
    }
    return true
}
export const checkoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case checkoutActionTypes.FORM_DATA_BLUR_CHANGE:
            return {
                ...state,
                formData: updateBlurHandler(state.formData, action.field)
            }
        case checkoutActionTypes.FORM_DATA_VALUE_CHANGE:
            return {
                ...state,
                formData: updateValue(state.formData, action.field, action.value)
            }
        case checkoutActionTypes.DELIVERY_CHECK:
            return {
                ...state,
                delivery: action.method
            }
        case checkoutActionTypes.PAYMENT_CHECK:
            return {
                ...state,
                payment: action.method
            }           
        case checkoutActionTypes.VALIDITY_CHEK:
            return {
                ...state,
                validity: formDataValidity(state.formData)
            }
        default:
            return state;
    }
}

export const formDataBlurHandlerChange = (field) => ({
    type: checkoutActionTypes.FORM_DATA_BLUR_CHANGE, 
    field
})
export const formDataValueChange = (field, value) => ({
    type: checkoutActionTypes.FORM_DATA_VALUE_CHANGE, 
    field, 
    value
})
export const deliveryMethodCheck = (method) => ({
    type: checkoutActionTypes.DELIVERY_CHECK, 
    method
})
export const paymentMethodCheck = (method) => ({
    type: checkoutActionTypes.PAYMENT_CHECK, 
    method
})
export const validityCheck = () => ({type: checkoutActionTypes.VALIDITY_CHEK})