import { IProduct } from "../types/product"
import instance from "./instance"

const getAllProduct = () => {
    return instance.get('products')
}
const getOneProduct = (id:number) => {
    return instance.get(`products/${id}`)
}
const addProduct = (product: IProduct) => {
    return instance.post(`products`, product)
}
const delProduct = (id:number) => {
    return instance.delete(`products/${id}`)
}
const editProduct = (product: IProduct) => {
    return instance.patch(`products/${product.id}`, product)
}
export {getAllProduct, getOneProduct, delProduct, addProduct, editProduct}