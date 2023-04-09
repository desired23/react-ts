import React, { useEffect, useState } from 'react'
import { IProduct } from '../types/product'

interface IProps { // định nghĩa kiểu dữ liệu cho props truyền vào component
    products: IProduct[],

}
const Products = (props:IProps) => {
    const [data, setData] = useState<IProduct[]>([]) //khởi taọ state data với kiểu dữ liệu của data là mảng IProduct
    useEffect(() => {
        console.log(props)
        setData(props.products)
    }, [props])

  return (
    <div>
        {data.map(item => {
            return (
                <div key={item._id}>
                    <h3>{item.name}</h3>
                    <h5>{item.price}</h5>
                    <h5>{item.description}</h5>
                    <h5>{item.image}</h5>
                    <h5>{item.categoryId}</h5>
                </div>
            )
        })}
    </div>
  )
}

export default Products