import React from 'react';
import MattressForm from './MattressForm';
import '../App.css'
import Filters from './Filters';

const MattressList = ({mattresses}) => {
    return (
        <div className='content'>
                <Filters/>
            <div className='mattress_list'>
                {mattresses.map(mattress => 
                    <MattressForm key={mattress.id} props={mattress}/>
            )}
            </div>
        </div>
    );
};

export default MattressList;