import { getPurchasedItemsValue } from "../../selectors";

test('isArray check', () => {
    expect(Array.isArray(getPurchasedItemsValue())).toBe(true)
})