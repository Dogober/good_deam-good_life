const fieldData = {
    value: "",
    blurHandler: false
}
const initialState = {
    formData: new Map([
        ["buyerSurname", fieldData],
        ["buyerName", fieldData],
        ["buyerPhone", fieldData],
        ["receiverSurname", fieldData],
        ["receiverName", fieldData],
        ["receiverPatronymic", fieldData],
        ["receiverPhone", fieldData],
    ]),
    delivery: new Map([
        ["pickup", true],
        ["targeted", false]
    ]),
    payment: new Map([
        ["byCard", false],
        ["byCash", true]
    ]),
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
    mapCopy.get(field).blurHandler = true
    return mapCopy
}
const updateValue = (formData, field, value) => {
    const mapCopy = new Map()
    for (let key of formData.keys()) {
        mapCopy.set(key, {...formData.get(key)})
    }
    mapCopy.get(field).value = value
    return mapCopy
}
const updateServices = (service, method) => {
    const mapCopy = new Map()
    for (let key of service.keys()) {
        if ( key === method) {
            mapCopy.set(key, true)
        } else {
            mapCopy.set(key, false)
        }
    }
    return mapCopy
}
const valueCheck = (formData) => {
    for (let key of formData.keys()) {
        if (formData.get(key).value === "") {
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
                delivery: updateServices(state.delivery, action.method)
            }
        case checkoutActionTypes.PAYMENT_CHECK:
            return {
                ...state,
                payment: updateServices(state.payment, action.method)
            }           
        case checkoutActionTypes.VALIDITY_CHEK:
            return {
                ...state,
                validity: valueCheck(state.formData)
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