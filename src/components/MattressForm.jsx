import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'

const MattressForm = ({props}) => {
    const route = useNavigate()
    return (
        <div className='mattress_form_container'>
            <div className='price'>
                <div style={{marginBottom: '5px'}}>
                    ЦЕНА:
                </div>
                <div>
                    {props.price} ₴
                </div>
            </div>
            <hr/>
            <div className='mattress_form'>
                <div>
                    <div className='mattress_options'>Матрас №{props.id}</div>
                    <div className='mattress_options'>Производитель: {props.producer}</div>
                    <div className='mattress_options'>Тип: {props.type}</div>
                    <div className='mattress_options'>Размер: {props.size} мм</div>
                    <div className='mattress_options'>Высота: {props.heigh} см</div>
                    <div className='mattress_options'>Нагрузка на 1 сп. место: {props.load} кг</div>
                    <div className='mattress_options'>Мягкость: {props.rigidity}</div>
                    <div className='mattress_options'>Описание: {props.body}</div>
                </div>
                <div className='img_container'>
                    <img src={props.img}/>
                    <div 
                        className='mattress_description'
                        onClick={() => route(`/${props.id}`)}
                    >
                        Подробно о товаре
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MattressForm;