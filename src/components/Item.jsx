import React from 'react';

const Item = ({item}) => {
    return (
        <div className='item_container'>
            <div className='item_body'>
                <img className='item_img' src={item.img}/>
                <div>{item.producer}. {item.size}. {item.body}</div>
            </div>
            <div className='item_price'>{item.price} ₴</div>
        </div>
    );
};

export default Item;