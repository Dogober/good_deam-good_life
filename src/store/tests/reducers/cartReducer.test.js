import { addToCart, cartReducer } from "../../reducers/cartReducer"

test('addToCart', () => {
    const mattress = {
        "id": 1,
        "producer": "Good dream",
        "load": 100,
        "img": "/mattress_№1.png",
        "type": "беспружинный",
        "price": 8500,
        "size" : "800x2000",
        "heigh": 15,
        "rigidity": "мягкий",
        "body" : "Беспружинный матрас обеспечит комфортный сон, а за счет долговечного наполнения срок службы увеличивается в разы."
    }
    expect(cartReducer({
        purchasedItems: [],
        purchasedItemsCost: 0,
        purchasedItemsNumber: 0
    }, addToCart(mattress))).toEqual({
        purchasedItems: [{
            mattress: mattress,
            number: 1
        }],
        purchasedItemsCost: mattress.price,
        purchasedItemsNumber: 1
    })
})