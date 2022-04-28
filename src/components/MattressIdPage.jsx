import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSelectedMattress } from '../async-functions/GetMattresses';

const MattressIdPage = () => {
    const selectedMattress = useSelector(state => state.mattressList.selectedMattress)
    const dispatch = useDispatch()
    const params = useParams()
    useEffect(() => {
        dispatch(getSelectedMattress(Number(params.id)))
    }, [])


    return (
        <div className='mattress_description_content'>
            {selectedMattress.id}
        </div>
    );
};

export default MattressIdPage;