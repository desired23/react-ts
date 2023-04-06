import { IUser } from "../types/user"
import instance from "./instance"

const getAllUsers = () => {
return instance.get('users')
}
const getOneUser = (id:number) => {
return instance.get(`users/${id}`)
}
const addUser = (user: IUser) => {
return instance.post(`users`, user)
}
const delUser = (id:number) => {
return instance.delete(`users/${id}`)
}
const editUser = (user: IUser) => {
return instance.patch(`users/${user.id}`, user)
}
export {getAllUsers, getOneUser, delUser, addUser, editUser}