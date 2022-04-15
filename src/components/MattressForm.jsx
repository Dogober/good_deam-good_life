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
                    <div>
                        Матрас №{props.id}
                    </div>
                    <div>
                        Тип: {props.type}
                    </div>
                    <div>
                        Размер: {props.size}см
                    </div>
                    <div>
                        Высота: {props.heigh}см
                    </div>
                    <div>
                        Мягкость: {props.rigidity}
                    </div>
                    <div className='discription'>
                        Описание: {props.body}
                    </div>
                </div>
                <img src={props.img}/>
            </div>
        </div>
    );
};

export default MattressForm;