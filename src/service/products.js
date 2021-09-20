import { http } from './config'

export default {

    list:() =>{
        return http.get('product')
    },

    save:(productCreate) => {
        return http.post('product', productCreate)
    },

    update:(updateProduct) =>{
        return http.put('product', updateProduct)
    },

    delete:(deleteProduct) => {
        return http.delete('product', {data: deleteProduct})
    }
}