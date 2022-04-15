import React from 'react';
import MattressForm from './MattressForm';
import Sider from './Sider';
import '../App.css'

const MattressList = ({mattresses}) => {
    return (
        <div className='content'>
                <Sider/>
            <div className='mattress_list'>
                {mattresses.map(mattress => 
                    <MattressForm key={mattress.id} props={mattress}/>
            )}
            </div>
        </div>
    );
};

export default MattressList;