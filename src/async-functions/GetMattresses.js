import axios from "axios"
import {
    addManyMattress, 
    addSelectedMattress, 
    filterMattressesOnProducer, 
    filterMattressesOnSize, 
    sortingMattressesOnPrice
} from "../store/reducers/mattressListReduser"

export const getMattresses = () => {
    return async (dispatch) => {
        const response = await axios.get('./mattress-catalog.json')
        dispatch(addManyMattress(response.data))
    }
}

export const getFilteredMattressesOnSize = (currentFilter) => {
    return async (dispatch) => {
        const response = await axios.get('./mattress-catalog.json')
        dispatch(filterMattressesOnSize(response.data, currentFilter))
    }
}

export const getFilteredMattressesOnProducer = (currentFilter) => {
    return async (dispatch) => {
        const response = await axios.get('./mattress-catalog.json')
        dispatch(filterMattressesOnProducer(response.data, currentFilter))
    }
}
export const getFilteredMattressesOnPrice = (selectedSort) => {
    return async (dispatch) => {
        const response = await axios.get('./mattress-catalog.json')
        dispatch(sortingMattressesOnPrice(response.data, selectedSort))
    }
}
export const getSelectedMattress = (params) => {
    return async (dispatch) => {
        const response = await axios.get('./mattress-catalog.json')
        dispatch(addSelectedMattress(response.data, params))
    }
}

