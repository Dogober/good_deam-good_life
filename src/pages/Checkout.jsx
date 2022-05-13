import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deliveryMethodCheck, formDataBlurHandlerChange, formDataValueChange, paymentMethodCheck, validityCheck } from '../store/reducers/checkoutReducer';

const Checkout = () => {
    const {purchasedItems} = useSelector(state => state.cart)
    const {formData, delivery, payment, validity} = useSelector(state => state.checkout)
    const dispatch = useDispatch()

    const totalCost = () => {
        let rezult = 0;
        const calcTotalCost = purchasedItems.reduce((firstItem, currentItem) => 
            firstItem + currentItem.purchasedItem.price * currentItem.number, rezult
        )
        return calcTotalCost
    }
    const totalItemsNumberInCart = () => {
        let rezult = 0;
        const calcTotalNumber = purchasedItems.reduce((firstItem, currentItem) => 
            firstItem + currentItem.number, rezult
        )
        return calcTotalNumber
    }
    const validator = (blurhandler, condition) => {
        if (!blurhandler && condition && validity === false) {
            return "Обязательное поле"
        } else if (blurhandler && condition) {
            return "Обязательное поле"
        } else {
            return ""
        }
    }
    const checkForm = (e) => {
        e.preventDefault()
        dispatch(validityCheck())
    }
    return (
    <form>
        <div className='chekout_title'>
            Оформление заказа
        </div>
        <div className='chekout_container'>
            <div className='chekout_your_data_container'>
                <fieldset>
                    <legend>
                        <span className='chekout_step_number'>1</span>
                        Ваши контактные данные
                    </legend>
                    <div className='chekout_your_data'>
                        <div className='data_container_surname'>
                            <div className='data_error'>
                                {validator(
                                    formData.get("buyerSurname").blurHandler, 
                                    formData.get("buyerSurname").value.length < 1
                                )}
                            </div>
                            <input 
                                className ='chekout_input_surname' 
                                type="text" 
                                placeholder='Фамилия'
                                name='buyerSurname'
                                value={formData.get("buyerSurname").value}
                                onBlur={(e) => dispatch(formDataBlurHandlerChange(e.target.name))}
                                onChange={(e) => dispatch(formDataValueChange(e.target.name, e.target.value))}
                            />
                        </div>
                        <div className='data_container_name'>
                            <div className='data_error'>
                                {validator(
                                    formData.get("buyerName").blurHandler,
                                    formData.get("buyerName").value.length < 1
                                )}
                            </div>
                            <input 
                                className ='chekout_input_name' 
                                type="text" 
                                placeholder='Имя'
                                name='buyerName'
                                value={formData.get("buyerName").value}
                                onBlur={(e) => dispatch(formDataBlurHandlerChange(e.target.name))}
                                onChange={(e) => dispatch(formDataValueChange(e.target.name, e.target.value))}
                            />
                        </div>
                    </div>
                    <div className='data_container_phone'>
                        <div className='data_error'>
                            {validator(
                                formData.get("buyerPhone").blurHandler, 
                                formData.get("buyerPhone").value.length < 13
                            )}
                        </div>
                        <input 
                            className ='chekout_input_phone_number' 
                            type="text" 
                            placeholder='Телефон'
                            name='buyerPhone'
                            value={formData.get("buyerPhone").value}
                            onBlur={(e) => dispatch(formDataBlurHandlerChange(e.target.name))}
                            onChange={(e) => dispatch(formDataValueChange(e.target.name, e.target.value))}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <legend>
                        <span className='chekout_step_number'>2</span>
                        Доставка
                    </legend>
                    <div className='chekout_delivery'>
                        <input 
                            className ='chekout_input' 
                            type="radio"
                            name="pickup"
                            onChange={e => dispatch(deliveryMethodCheck(e.target.name))}
                            checked={delivery.get("pickup")}
                        />
                        Самовывоз со склада (магазина)
                    </div>
                    <div className='chekout_delivery'>
                        <input 
                            className ='chekout_input' 
                            type="radio"
                            name="targeted"
                            onChange={e => dispatch(deliveryMethodCheck(e.target.name))}
                            checked={delivery.get("targeted")}
                        />
                        Адресная доставка
                    </div>
                </fieldset>
                <fieldset>
                    <legend>
                        <span className='chekout_step_number'>3</span>
                        Способ оплаты
                    </legend>
                    <div className='chekout_payment_method'>
                        <input 
                            className ='chekout_input' 
                            type="radio"
                            name="byCard"
                            onChange={e => dispatch(paymentMethodCheck(e.target.name))}
                            checked={payment.get("byCard")}
                        />
                        Банковская карта
                    </div>
                    <div className='chekout_payment_method'>
                        <input 
                            className ='chekout_input' 
                            type="radio"
                            name="byCash"
                            onChange={e => dispatch(paymentMethodCheck(e.target.name))}
                            checked={payment.get("byCash")}
                        />
                        Наличный расчет
                    </div>
                </fieldset>
                <fieldset>
                    <legend>
                        <span className='chekout_step_number'>4</span>
                        Данные получателя
                    </legend>
                    <div className='chekout_your_data'>
                        <div className='data_container_surname'>
                            <div className='data_error'>
                                {validator(
                                    formData.get("receiverSurname").blurHandler, 
                                    formData.get("receiverSurname").value.length < 1
                                )}
                            </div>  
                            <input 
                                className ='chekout_input_surname' 
                                type="text" 
                                placeholder='Фамилия'
                                name='receiverSurname'
                                value={formData.get("receiverSurname").value}
                                onBlur={(e) => dispatch(formDataBlurHandlerChange(e.target.name))}
                                onChange={(e) => dispatch(formDataValueChange(e.target.name, e.target.value))}
                            />
                        </div>
                        <div className='data_container_name'>
                            <div className='data_error'>
                                {validator(
                                    formData.get("receiverName").blurHandler, 
                                    formData.get("receiverName").value.length < 1
                                )}
                            </div>
                            <input 
                                className ='chekout_input_name' 
                                type="text" 
                                placeholder='Имя'
                                name='receiverName'
                                value={formData.get("receiverName").value}
                                onBlur={(e) => dispatch(formDataBlurHandlerChange(e.target.name))}
                                onChange={(e) => dispatch(formDataValueChange(e.target.name, e.target.value))}
                            />
                        </div>
                    </div>
                    <div className='chekout_your_data'>
                        <div className='data_container_patronymic'>
                            <div className='data_error'>
                                {validator(
                                    formData.get("receiverPatronymic").blurHandler, 
                                    formData.get("receiverPatronymic").value.length < 1
                                )}
                            </div>
                            <input 
                                className ='chekout_input_surname' 
                                type="text" 
                                placeholder='Отчество'
                                name='receiverPatronymic'
                                value={formData.get("receiverPatronymic").value}
                                onBlur={(e) => dispatch(formDataBlurHandlerChange(e.target.name))}
                                onChange={(e) => dispatch(formDataValueChange(e.target.name, e.target.value))}
                            />
                        </div>
                        <div className='data_container_phone'>
                            <div className='data_error'>
                                {validator(
                                    formData.get("receiverPhone").blurHandler, 
                                    formData.get("receiverPhone").value.length < 13
                                    )}
                            </div>
                            <input 
                                className ='chekout_input_phone_number' 
                                type="text" 
                                placeholder='Телефон'
                                name='receiverPhone'
                                value={formData.get("receiverPhone").value}
                                onBlur={(e) => dispatch(formDataBlurHandlerChange(e.target.name))}
                                onChange={(e) => dispatch(formDataValueChange(e.target.name, e.target.value))}
                            />
                        </div>
                    </div>
                </fieldset>
            </div>
            <aside className='to_pay_container'>
                <div className='to_pay_total'>Итого</div>
                <div className='to_pay_total_calc'>
                    <div>{totalItemsNumberInCart()} ед. на сумму</div>
                    <div>{totalCost()} ₴</div>
                </div>
                <div className='to_pay_total_calc'>
                    <div>Доставка при <br/> покупке от 8000 ₴</div>
                    <div>Бесплатно</div>
                </div>
                <div className='to_pay_calc'>
                    <div>К оплате</div>
                    <div className='to_pay_total'>{totalCost()} ₴</div>
                </div>
                <div className='to_pay_confirm_container'>
                    <button onClick={e => checkForm(e)} className='to_pay_confirm'>Заказ подтверждаю</button>
                </div>
                <div className='to_pay_notation'>
                    Подтверждая заказ, я принимаю условия:
                    <ul className='to_pay_notation_list'>
                        <li>положения о сборе и защите персональных данных</li>
                        <li>пользовательского соглашения</li>
                    </ul>
                </div>
            </aside>
        </div>
    </form>
    );
};

export default Checkout;