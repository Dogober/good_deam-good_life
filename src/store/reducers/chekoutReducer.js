const fieldData = {
    value: "",
    blurHandler: false
}
const initialState = {
    formData: new Map(
        [
            ["buyerSurname", fieldData],
            ["buyerName", fieldData],
            ["buyerPhone", fieldData],
            ["receiverSurname", fieldData],
            ["receiverName", fieldData],
            ["receiverPatronymic", fieldData],
            ["receiverPhone", fieldData],
        ]
    ),
    validity: null
}
const chekoutActionTypes = {
    FORM_DATA_BLUR_CHANGE: 'FORM_DATA_BLUR_CHANGE',
    FORM_DATA_VALUE_CHANGE: 'FORM_DATA_VALUE_CHANGE',
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
const validityCheck = (formData) => {
    for (let key of formData.keys()) {
        if (formData.get(key).value === "") {
            return false
        }
    }
    return true
}
export const chekoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case chekoutActionTypes.FORM_DATA_BLUR_CHANGE:
            return {
                ...state,
                formData: updateBlurHandler(state.formData, action.field)
            }
        case chekoutActionTypes.FORM_DATA_VALUE_CHANGE:
            return {
                ...state,
                formData: updateValue(state.formData, action.field, action.value)
            }
        case chekoutActionTypes.VALIDITY_CHEK:
            return {
                ...state,
                validity: validityCheck(state.formData)
            }
        default:
            return state;
    }
}

export const formDataBlurHandlerChange = (field) => ({
    type: chekoutActionTypes.FORM_DATA_BLUR_CHANGE, 
    field
})
export const formDataValueChange = (field, value) => ({
    type: chekoutActionTypes.FORM_DATA_VALUE_CHANGE, 
    field, 
    value
})

export const validityChek = () => ({type: chekoutActionTypes.VALIDITY_CHEK})