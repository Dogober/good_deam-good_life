import { useDispatch, useSelector } from 'react-redux';
import ChekoutModal from '../components/ChekoutModal';
import { deliveryMethodCheck, formDataBlurHandlerChange, formDataValueChange, paymentMethodCheck, validityCheck } from '../store/reducers/checkoutReducer';

const Checkout = () => {
    const {purchasedItems} = useSelector(state => state.cart)
    const {formData, delivery, payment, validity} = useSelector(state => state.checkout)
    const dispatch = useDispatch()
    let formStyles = []

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
    const validator = (field, style) => {
        if (validity === false && !field.validity) {
            formStyles = []
            formStyles.push(style, 'input_error')
            return "Обязательное поле"
        } else if (field.blurHandler && !field.validity) {
            formStyles = []
            formStyles.push(style, 'input_error')
            return "Обязательное поле"
        } else {
            formStyles = []
            formStyles.push(style)
            return ""
        }
    }
    const checkForm = (e) => {
        e.preventDefault()
        dispatch(validityCheck())
    }
    return (
        <div>
            <ChekoutModal/>
    <form>
        <div className='checkout_title'>
            Оформление заказа
        </div>
        <div className='checkout_container'>
            <div className='checkout_your_data_container'>
                <fieldset>
                    <legend>
                        <span className='checkout_step_number'>1</span>
                        Ваши контактные данные
                    </legend>
                    <div className='checkout_your_data'>
                        <div className='data_container_surname'>
                            <div className='data_error'>
                                {validator(formData.get("buyerSurname"), 'checkout_input_surname')}
                            </div>
                            <input 
                                className ={formStyles.join(' ')} 
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
                                {validator(formData.get("buyerName"), 'checkout_input_name')}
                            </div>
                            <input 
                                className ={formStyles.join(' ')} 
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
                            {validator(formData.get("buyerPhone"), 'checkout_input_phone_number')}
                        </div>
                        <input 
                            className ={formStyles.join(' ')} 
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
                        <span className='checkout_step_number'>2</span>
                        Доставка
                    </legend>
                    <div className='checkout_delivery'>
                        <input 
                            className ='checkout_input' 
                            type="radio"
                            name="pickup"
                            onChange={e => dispatch(deliveryMethodCheck(e.target.name))}
                            checked={delivery === "pickup"}
                        />
                        Самовывоз со склада (магазина)
                    </div>
                    <div className='checkout_delivery'>
                        <input 
                            className ='checkout_input' 
                            type="radio"
                            name="targeted"
                            onChange={e => dispatch(deliveryMethodCheck(e.target.name))}
                            checked={delivery === "targeted"}
                        />
                        Адресная доставка
                    </div>
                </fieldset>
                <fieldset>
                    <legend>
                        <span className='checkout_step_number'>3</span>
                        Способ оплаты
                    </legend>
                    <div className='checkout_payment_method'>
                        <input 
                            className ='checkout_input' 
                            type="radio"
                            name="byCard"
                            onChange={e => dispatch(paymentMethodCheck(e.target.name))}
                            checked={payment === "byCard"}
                        />
                        Банковская карта
                    </div>
                    <div className='checkout_payment_method'>
                        <input 
                            className ='checkout_input' 
                            type="radio"
                            name="byCash"
                            onChange={e => dispatch(paymentMethodCheck(e.target.name))}
                            checked={payment === "byCash"}
                        />
                        Наличный расчет
                    </div>
                </fieldset>
                <fieldset>
                    <legend>
                        <span className='checkout_step_number'>4</span>
                        Данные получателя
                    </legend>
                    <div className='checkout_your_data'>
                        <div className='data_container_surname'>
                            <div className='data_error'>
                                {validator(formData.get("receiverSurname"), 'checkout_input_surname')}
                            </div>  
                            <input 
                                className ={formStyles.join(' ')}  
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
                                {validator(formData.get("receiverName"), 'checkout_input_name')}
                            </div>
                            <input 
                                className ={formStyles.join(' ')}  
                                type="text" 
                                placeholder='Имя'
                                name='receiverName'
                                value={formData.get("receiverName").value}
                                onBlur={(e) => dispatch(formDataBlurHandlerChange(e.target.name))}
                                onChange={(e) => dispatch(formDataValueChange(e.target.name, e.target.value))}
                            />
                        </div>
                    </div>
                    <div className='checkout_your_data'>
                        <div className='data_container_patronymic'>
                            <div className='data_error'>
                                {validator(formData.get("receiverPatronymic"), 'checkout_input_surname')}
                            </div>
                            <input 
                                className ={formStyles.join(' ')}  
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
                                {validator(formData.get("receiverPhone"), 'checkout_input_phone_number')}
                            </div>
                            <input 
                                className ={formStyles.join(' ')} 
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
    </div>
    );
};

export default Checkout;