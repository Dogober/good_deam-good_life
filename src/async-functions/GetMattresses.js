import axios from "axios"
import { addManyMattress, filterMattressesOnSize } from "../store/reducers/mattressListReduser"

export const getMattresses = () => {
    return async (dispatch) => {
        const response = await axios.get('./mattress-catalog.json')
        dispatch(addManyMattress(response.data))
    }
}

export const getFilteredMattresses = (currentFilter) => {
    return async (dispatch) => {
        const response = await axios.get('./mattress-catalog.json')
        dispatch(filterMattressesOnSize(response.data, currentFilter))
    }
}