const fieldData = {
    value: "",
    blurHandler: false,
    validity: false
}
const initialState = {
    formData: new Map([
        ["buyerSurname", fieldData],
        ["buyerName", fieldData],
        ["buyerPhone", fieldData],
        ["receiverSurname", fieldData],
        ["receiverName", fieldData],
        ["receiverEmail", fieldData],
        ["receiverPhone", fieldData],
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
    VALIDITY_CHEK: 'VALIDITY_CHEK',
    FORM_CLEAR: 'FORM_CLEAR'
}
const copyFormData = (formData, copy) => {
    for (let key of formData.keys()) {
        copy.set(key, {...formData.get(key)})
    }
}
const updateValidity = (field, fieldData) => {
    const initialsRegExp = /[А-Я][а-я]+/g
    const phoneRegExp = /\+\d{12}/g
    const regExpMap = new Map ([
        ["buyerSurname", initialsRegExp],
        ["buyerName", initialsRegExp],
        ["buyerPhone", phoneRegExp],
        ["receiverSurname", initialsRegExp],
        ["receiverName", initialsRegExp],
        ["receiverEmail", /([a-zA-Z0-9]\.?){5,29}\w@([a-z]+\.[a-z]+)/g],
        ["receiverPhone", phoneRegExp],
    ])
    const validityAr = fieldData.value.match(regExpMap.get(field))
    if (validityAr && validityAr[0] === fieldData.value) {
        fieldData.validity = true
    } else {
        fieldData.validity = false
    }
}
const updateBlurHandler = (formData, field) => {
    const copy = new Map()
    copyFormData(formData, copy)
    copy.get(field).blurHandler = true
    updateValidity(field, copy.get(field))
    return copy
}
const updateValue = (formData, field, value) => {
    const copy = new Map()
    copyFormData(formData, copy)
    copy.get(field).value = value
    updateValidity(field, copy.get(field))
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
                validity: formDataValidity(state.formData),
            }
        case checkoutActionTypes.FORM_CLEAR:
            return {
                ...state,
                formData: new Map([
                    ["buyerSurname", fieldData],
                    ["buyerName", fieldData],
                    ["buyerPhone", fieldData],
                    ["receiverSurname", fieldData],
                    ["receiverName", fieldData],
                    ["receiverEmail", fieldData],
                    ["receiverPhone", fieldData],
                ]),
                delivery: "pickup",
                payment: "byCash",
                validity: null
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
export const formClear = () => ({type: checkoutActionTypes.FORM_CLEAR})