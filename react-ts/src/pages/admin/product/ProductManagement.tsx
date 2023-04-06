import React from 'react'
import { IProduct } from '../../../types/product'
import { ColumnsType } from 'antd/es/table'
import { Space, Table } from 'antd'
import { Button } from 'antd/es/radio'
import { Link } from 'react-router-dom'


interface DataType {
  key: string | number
  id: number,
  name: string,
  price: number,
  image: string,
  description: string,
  categoryId: number
}
interface IProps {
  products: IProduct[],
  onRemove: (id: number) => void
}

const ProductManagement = (props: IProps) => {
  const onRemove = (id: number) => props.onRemove(id)

  const columns: ColumnsType<DataType> = [
    {
      title: 'Product Name',
      dataIndex: 'name',
      key: "name",
      render: (text) => <a>{text}</a>
    },
    {
      title: 'Product Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Product Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Product Image',
      dataIndex: 'image',
      key: 'image',
      render: (text) => <img width={100} src={text} alt="undefined"  />
    },
    {
      title: 'Product CategoryId',
      dataIndex: 'categoryId',
      key: 'categoryId',
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (

        <Space size="middle">
          <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => onRemove(record.id)}>Remove</Button>
          <Button type="primary" ><Link to={`/admin/products/${record.id}/update`}>Update</Link></Button>
        </Space>
      ),
    },
  ]
  const data: DataType[] = props.products.map((item: IProduct) => {
    return {
        key: item.id,
        ...item
    }
})
  return (
    <div>
      <Button type='primary'><Link to={'/admin/products/add'}>Add New Product</Link></Button>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} /></div>
  )
}

export default ProductManagement