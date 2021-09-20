import axios from 'axios'

export const http = axios.create({
    baseURL:'https://productsrestapi.herokuapp.com/api/'
})