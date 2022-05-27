import { checkoutReducer, deliveryMethodCheck, formDataBlurHandlerChange, formDataValueChange } from "../../reducers/checkoutReducer"

test('deliveryMethodCheck', () => {
    expect(checkoutReducer({}, deliveryMethodCheck("targeted")))
        .toEqual({delivery: "targeted"})
})
test('formDataBlurHandlerChange', () => {
    expect(checkoutReducer({
        formData: new Map([
            ["buyerSurname",  {
                value: "Балабанов",
                blurHandler: true,
                validity: true
            }],
            ["buyerName", {
                value: "Соня",
                blurHandler: false,
                validity: true
            }]
        ])
    }, formDataBlurHandlerChange("buyerName"))).toEqual({
        formData: new Map([
            ["buyerSurname",  {
                value: "Балабанов",
                blurHandler: true,
                validity: true
            }],
            ["buyerName", {
                value: "Соня",
                blurHandler: true,
                validity: true
            }]
        ])
    })
})
test('formDataValueChange', () => {
    expect(checkoutReducer({
        formData: new Map([
            ["buyerSurname",  {
                value: "",
                blurHandler: false,
                validity: false
            }],
            ["buyerName", {
                value: "",
                blurHandler: false,
                validity: false
            }]
        ])
    }, formDataValueChange("buyerName", 'Никита'))).toEqual({
        formData: new Map([
            ["buyerSurname",  {
                value: "",
                blurHandler: false,
                validity: false
            }],
            ["buyerName", {
                value: 'Никита',
                blurHandler: false,
                validity: true
            }]
        ])
    })
})