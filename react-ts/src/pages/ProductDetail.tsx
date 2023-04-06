import React, { useEffect, useState } from 'react'
import { IProduct } from '../types/product'
import { useParams } from 'react-router-dom'

interface IProps { // định nghĩa kiểu dữ liệu cho props truyền vào component
    products: IProduct[],
   
}
const ProductDetail = (props:IProps) => {
    const {id} = useParams()
    const [data, setData] = useState<IProduct>() 
    useEffect(() => {
        console.log(props)
        setData(props.products.find((product: IProduct) => product.id == Number(id)))
    }, [props])

  return (
    <div>
        { <div key={data?.id}>
                    <h3 className=''>{data?.name}</h3>
                    <h5>{data?.price}</h5>
                    <h5>{data?.description}</h5>
                    <img src={data?.image}></img>
                    <h5>{data?.categoryId}</h5>
</div>          
        }
    </div>
  )
}

export default ProductDetail