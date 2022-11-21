import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSelectedMattress } from '../async-functions/GetMattresses';
import { addSelectedMattress } from '../store/reducers/mattressDetailsReducer';
import MattressesComments from '../components/MattressesComments';
import ProductNotFound from './ProductNotFound';
import MattressDescription from '../components/MattressDescription';

const MattressDetails = () => {
    const selectedMattress = useSelector(state => state.mattressDetails.selectedMattress)
    const dispatch = useDispatch()
    const params = useParams()

useEffect(() => {
    dispatch(getSelectedMattress(Number(params.id)))
    return () => {
        dispatch(addSelectedMattress(null))
    }
}, [])
    window.scrollTo(0, 0)

const renderingSelectedMattressByCondition = () => {
    if (selectedMattress === undefined) {
        return <ProductNotFound params={params}/>
    } else if (selectedMattress) {
        return <>
                <MattressDescription/>
                <MattressesComments params={params}/>
            </>               
    }
    return <div className='move_to_another_page'></div>
}

    return (
        <div className='mattress_description_content_container'>
            {renderingSelectedMattressByCondition()}
        </div>
    );
};

export default MattressDetails;