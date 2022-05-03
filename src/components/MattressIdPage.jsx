import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getSelectedMattress } from '../async-functions/GetMattresses';
import { addSelectedMattress, addToBasket } from '../store/reducers/mattressIdReducer';
import MattressesComments from './MattressesComments';
import ProductNotFound from './ProductNotFound';

const MattressIdPage = () => {
    const selectedMattress = useSelector(state => state.mattressId.selectedMattress)
    const itemsInTheCart = useSelector(state => state.mattressId.itemsInTheCart)
    const dispatch = useDispatch()
    const params = useParams()
    const route = useNavigate()

useEffect(() => {
    dispatch(getSelectedMattress(Number(params.id)))
    return () => {
        dispatch(addSelectedMattress(null))
    }
}, [])
useEffect(() => window.scrollTo(0, 0), []);

const renderingSelectedMattressByCondition = () => {
    if (selectedMattress === undefined) {
        return <div>
                    <ProductNotFound params={params}/>
                    <MattressesComments params={params}/>
                </div>
    } else if (selectedMattress !== null) {
        return <><div className='mattress_description_content'>
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
                            {itemsInTheCart.find(item => item.id === selectedMattress.id)
                                ?<div 
                                    className='already_bought'
                                    onClick={() => route('/busket')}
                                >
                                    В корзине
                                </div>
                                :<div 
                                    className='add_to_cart'
                                    onClick={() => dispatch(addToBasket())}
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
                <MattressesComments params={params}/>
            </>               
    } else {
        return <div className='move_to_another_page'>
            
        </div>
    }
}

    return (
        <div className='mattress_description_content_container'>
            {renderingSelectedMattressByCondition()}
        </div>
    );
};

export default MattressIdPage;