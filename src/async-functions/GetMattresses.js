import axios from "axios"
import { addCommentsByMattressId, addSelectedMattress } from "../store/reducers/mattressIdReducer"
import {
    addManyMattress, 
    filterMattressesOnProducer, 
    filterMattressesOnSize, 
    sortingMattressesOnPrice
} from "../store/reducers/mattressListReduser"

export const getMattresses = () => {
    return async (dispatch) => {
        const response = await axios.get('/mattress-catalog.json')
        dispatch(addManyMattress(response.data))
    }
}

export const getFilteredMattressesOnSize = (currentFilter) => {
    return async (dispatch) => {
        const response = await axios.get('/mattress-catalog.json')
        dispatch(filterMattressesOnSize(response.data, currentFilter))
    }
}

export const getFilteredMattressesOnProducer = (currentFilter) => {
    return async (dispatch) => {
        const response = await axios.get('/mattress-catalog.json')
        dispatch(filterMattressesOnProducer(response.data, currentFilter))
    }
}
export const getFilteredMattressesOnPrice = (selectedSort) => {
    return async (dispatch) => {
        const response = await axios.get('/mattress-catalog.json')
        dispatch(sortingMattressesOnPrice(response.data, selectedSort))
    }
}
export const getSelectedMattress = (params) => {
    return async (dispatch) => {
        const response = await axios.get('/mattress-catalog.json')
        dispatch(addSelectedMattress(response.data, params))
    }
}
export const getComments = (params) => {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/comments', {
            params: {
                postId:params
            }
        })
        .then(response => response.json())
        .then(json => dispatch(addCommentsByMattressId(json, params)))
    }
}