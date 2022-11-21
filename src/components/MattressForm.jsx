import React from 'react';
import { useNavigate } from 'react-router-dom';
import Mattress from '../assets/mattress.png'

const MattressForm = ({props}) => {
    const route = useNavigate()
    return (
        <div 
            className='mattress_form_container'
            onClick={() => route(`/home/${props.id}`)}
        >
            <div className='mattress_form'>
                <div className='mattress_img_container'>
                    <img className='mattress_img' src={Mattress}/>
                </div>
                <div>
                    <div className='mattress_options'>Матрас №{props.id}</div>
                    <div className='mattress_options'>Производитель: {props.producer}</div>
                    <div className='mattress_options'>Тип: {props.type}</div>
                    <div className='mattress_options'>Размер: {props.size} мм</div>
                    <div className='mattress_options'>Высота: {props.heigh} см</div>
                    <div className='mattress_options'>Нагрузка на 1 сп. место: {props.load} кг</div>
                    <div className='mattress_options'>Мягкость: {props.rigidity}</div>
                    <div className='mattress_options bodyoption'>{props.body}</div>
                </div>
            </div>
            <div className='price'>
                {props.price} ₴
            </div>
        </div>
    );
};

export default MattressForm;