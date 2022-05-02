import axios from "axios"
import { addCommentsByMattressId, addSelectedMattress, catchError } from "../store/reducers/mattressIdReducer"
import {
    addManyMattress, 
    currentState, 
    filterMattressesOnProducer, 
    filterMattressesOnSize, 
    sortingMattressesOnPrice
} from "../store/reducers/mattressListReduser"

export const getMattresses = (homePageIsLoading) => {
    return async (dispatch) => {
        if (homePageIsLoading) {
            const response = await axios.get('/mattress-catalog.json')
            dispatch(addManyMattress(response.data))
        } else {
            dispatch(currentState())
        }
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