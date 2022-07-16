import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ChekoutModal from '../components/ChekoutModal';
import FormInput from '../components/UI/FormInput';
import FormDeliveryInput from '../components/UI/FormDeliveryInput';
import FormPaymentInput from '../components/UI/FormPaymentInput';
import FormLegend from '../components/FormLegend';
import FormAside from '../components/FormAside';

const Checkout = () => {
    const {purchasedItemsNumber} = useSelector(state => state.cart)
    const route = useNavigate()
    useEffect(() => {
        if (!purchasedItemsNumber) { 
            route('/home')
        }
    }, [])
    return (
        <div>
            <ChekoutModal/>
            <form>
                <div className='checkout_title'> Оформление заказа </div>
                <div className='checkout_container'>
                    <div className='checkout_your_data_container'>
                        <fieldset>
                            <FormLegend item={1}> Ваши контактные данные </FormLegend>
                            <div className='checkout_your_data'>
                                <FormInput
                                    containerStyle={'data_container_surname'}
                                    inputStyle={'checkout_input_surname'}
                                    name={'buyerSurname'}
                                    placeholder={'Фамилия'}
                                />
                                <FormInput
                                    containerStyle={'data_container_name'}
                                    inputStyle={'checkout_input_name'}
                                    name={"buyerName"}
                                    placeholder={'Имя'}
                                />
                            </div>
                                <FormInput
                                    containerStyle={'data_container_phone'}
                                    inputStyle={'checkout_input_phone_number'}
                                    name={'buyerPhone'}
                                    placeholder={'Телефон'}
                                />
                        </fieldset>
                        <fieldset>
                            <FormLegend item={2}> Доставка </FormLegend>
                            <FormDeliveryInput name={"pickup"}> Самовывоз со склада (магазина) </FormDeliveryInput>
                            <FormDeliveryInput name={"targeted"}> Адресная доставка </FormDeliveryInput>
                        </fieldset>
                        <fieldset>
                            <FormLegend item={3}> Способ оплаты </FormLegend>
                            <FormPaymentInput name={"byCard"}> Банковская карта </FormPaymentInput>
                            <FormPaymentInput name={"byCash"}> Наличный расчет </FormPaymentInput>
                        </fieldset>
                        <fieldset>
                            <FormLegend item={4}> Данные получателя </FormLegend>
                            <div className='checkout_your_data'>
                                <FormInput
                                    containerStyle={'data_container_surname'}
                                    inputStyle={'checkout_input_surname'}
                                    name={'receiverSurname'}
                                    placeholder={'Фамилия'}
                                />
                                <FormInput
                                    containerStyle={'data_container_name'}
                                    inputStyle={'checkout_input_name'}
                                    name={'receiverName'}
                                    placeholder={'Имя'}
                                />
                            </div>
                            <div className='checkout_your_data'>
                                <FormInput
                                    containerStyle={'data_container_email'}
                                    inputStyle={'checkout_input_surname'}
                                    name={'receiverEmail'}
                                    placeholder={'@Email'}
                                />
                                <FormInput
                                    containerStyle={'data_container_phone'}
                                    inputStyle={'checkout_input_phone_number'}
                                    name={'receiverPhone'}
                                    placeholder={'Телефон'}
                                />
                            </div>
                        </fieldset>
                    </div>
                    <FormAside />
                </div>
            </form>
        </div>
    );
};

export default Checkout;