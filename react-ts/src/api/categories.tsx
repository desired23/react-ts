import { ICategory } from "../types/category"
import instance from "./instance"

const getAllCategory = () => {
    return instance.get('categories')
}
const getOneCategory = (id:number) => {
    return instance.get(`categories/${id}`)
}
const addCategory = (category: ICategory) => {
    return instance.post(`categories`, category)
}
const delCategory = (id:number) => {
    return instance.delete(`categories/${id}`)
}
const editCategory = (category: ICategory) => {
    return instance.patch(`categories/${category.id}`, category)
}
export {getAllCategory, getOneCategory, delCategory, addCategory, editCategory}