import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../store/reducers/cartReducer';

const MattressDescription = () => {
    const selectedMattress = useSelector(state => state.mattressDetails.selectedMattress)
    const purchasedItems = useSelector(state => state.cart.purchasedItems)
    const dispatch = useDispatch()
    const route = useNavigate()

    return (
        <div className='mattress_description_content'>
            <div>
                <img className='img_detail' src={selectedMattress.img}/>
            </div>
            <div className='detail'>
                <div className='detail_producer'>
                    {selectedMattress.producer}
                </div>
                <div className='detail_price'>
                    <div>
                        {selectedMattress.price} ₴
                    </div>
                    {purchasedItems.find(item => item.mattress.id === selectedMattress.id)
                        ?<div 
                            className='already_bought'
                            onClick={() => route('/cart')}
                        >
                            В корзине
                        </div>
                        :<div 
                            className='add_to_cart'
                            onClick={() => dispatch(addToCart(selectedMattress))}
                        >
                            Купить
                        </div>
                    }
                </div>
                <div className='detail_delivery'>
                    Доставка в течении 7 дней
                </div>
                <div className='detail_benefits'>
                    <div className='benefits'>10 лет гарантии</div>
                        Гарантия распространяется на наполнение.
                    <div className='benefits'>Низкая цена</div>
                        На данный товар действует дополнительная скидка (10%) при покупке чехла.
                    <div className='benefits'>Индивидуальный подход</div>
                        Наши консультанты помогут вам сделать правильный выбор исходя из ваших предпочтений
                </div>
            </div>
        </div>
    )           
}

export default MattressDescription;