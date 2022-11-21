import axios from "axios"
import { addCommentsByMattressId, addSelectedMattress, catchError } from "../store/reducers/mattressDetailsReducer"
import {
    addManyMattress, 
    filterMattressesOnProducer, 
    filterMattressesOnSize, 
    sortingMattressesOnPrice
} from "../store/reducers/mattressListReduser"

const url = 'https://my-json-server.typicode.com/Dogober/demo/mattresses'

export const getMattresses = (homePageIsLoading) => {
    return async (dispatch) => {
        if (homePageIsLoading) {
            const response = await axios.get(url)
            dispatch(addManyMattress(response.data))
        }
    }
}

export const getFilteredMattressesOnSize = (currentFilter) => {
    return async (dispatch) => {
        const response = await axios.get(url)
        dispatch(filterMattressesOnSize(response.data, currentFilter))
    }
}

export const getFilteredMattressesOnProducer = (currentFilter) => {
    return async (dispatch) => {
        const response = await axios.get(url)
        dispatch(filterMattressesOnProducer(response.data, currentFilter))
    }
}
export const getFilteredMattressesOnPrice = (selectedSort) => {
    return async (dispatch) => {
        const response = await axios.get(url)
        dispatch(sortingMattressesOnPrice(response.data, selectedSort))
    }
}
export const getSelectedMattress = (params) => {
    return async (dispatch) => {
        const response = await axios.get(url)
        const selected = response.data.filter(mattress => mattress.id === params).pop()
        dispatch(addSelectedMattress(selected))
    }
}
export const getComments = (params) => {
    return async (dispatch) => {
        setTimeout(async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + params)
                dispatch(addCommentsByMattressId(response.data))
            } catch (e) {
                dispatch(catchError(e.message))
            }
    
        }, 1000)
    }
}