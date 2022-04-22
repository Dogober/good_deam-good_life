import React from 'react';
import '../App.css'

const MattressForm = ({props}) => {
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
                    <div className='matras_options'>Матрас №{props.id}</div>
                    <div className='matras_options'>Производитель: {props.producer}</div>
                    <div className='matras_options'>Тип: {props.type}</div>
                    <div className='matras_options'>Размер: {props.size} мм</div>
                    <div className='matras_options'>Высота: {props.heigh} см</div>
                    <div className='matras_options'>Нагрузка на 1 сп. место: {props.load} кг</div>
                    <div className='matras_options'>Мягкость: {props.rigidity}</div>
                    <div className='discription'>Описание: {props.body}</div>
                </div>
                <img src={props.img}/>
            </div>
        </div>
    );
};

export default MattressForm;