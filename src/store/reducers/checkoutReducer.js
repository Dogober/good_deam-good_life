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
const copyFormData = (formData, copy) => {
    for (let key of formData.keys()) {
        copy.set(key, {...formData.get(key)})
    }
}
const updateValidity = (copy, field) => {
    if (copy.get(field).value.length < copy.get(field).minLength) {
        copy.get(field).validity = false
    } else {
        copy.get(field).validity = true
    }
}
const updateBlurHandler = (formData, field) => {
    const copy = new Map()
    copyFormData(formData, copy)
    copy.get(field).blurHandler = true
    updateValidity(copy, field)
    return copy
}
const updateValue = (formData, field, value) => {
    const copy = new Map()
    copyFormData(formData, copy)
    copy.get(field).value = value
    updateValidity(copy, field)
    return copy
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