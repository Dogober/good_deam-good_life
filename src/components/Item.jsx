import React from 'react';

const Item = ({item}) => {
    return (
        <div className='item_container'>
            <div className='item_body'>
                <img className='item_img' src={item.img}/>
                <div>{item.producer}. {item.size}. {item.body}</div>
            </div>
            <div className='item_control_panel'>
                <div className='counter_container'>
                    <div className='counter_button'>⎯</div>
                    <div className='counter'>1</div>
                    <div className='counter_button'>+</div>
                </div>
                <div className='item_price'>{item.price} ₴</div>
            </div>
        </div>
    );
};

export default Item;