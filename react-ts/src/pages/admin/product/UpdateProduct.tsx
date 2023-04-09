import React, { useEffect, useState } from 'react'
import { IProduct } from '../../../types/product'
import { useNavigate, useParams } from 'react-router-dom'

import { Button, Checkbox, Form, Input, Select } from 'antd';
import { ICategory } from '../../../types/category';

interface IProps {
  categories: ICategory[]
  products: IProduct[]
  onUpdate: (product: IProduct) => void
}
const UpdateProduct = (props: IProps) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState<IProduct>()
  useEffect(() => {
    setProduct(props.products.find((product: IProduct) => product.id == Number(id)))
  }, [props])
  useEffect(() => { // khi biến product thay đổi thì sẽ chạy useEffect này
    setFields() // gọi hàm setFields để set lại giá trị cho các input
  }, [product])
  const [form] = Form.useForm();
  // khởi tạo một instance của Form và gán vào biến form
  // Instance của form là một đối tượng được tạo ra bởi Ant Design để thực hiện các chức năng của form trong React

  const setFields = () => {// hàm này để set lại giá trị cho các input
    form.setFieldsValue({ // gọi hàm setFieldsValue của instance form để set lại giá trị cho các input dựa vào giá trị của biến product
      id: product?.id,
      name: product?.name,
      description: product?.description,
      price: product?.price,
      image: product?.image,
      categoryId: product?.categoryId



    })
  }
  const onFinish = (values: any) => {
    props.onUpdate(values);
    navigate('/admin/products')
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
      <Form
        form={form}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
      >
        {/* đoạn này cần truyền cả id vào form khi submit để lấy được giá trị id truyền lên component App */}
        <Form.Item
          label=""
          name="id"
          style={{ display: 'none' }} // ẩn input này đi
        >
          <Input />
        </Form.Item>


        <Form.Item
          label="Product Name"
          name="name"
          rules={[{ required: true, message: 'Please input your Product Name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: 'Please input your description!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Product Price"
          name="price"
          rules={[{ required: true, message: 'Please input your Product Price!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Images"
          name="image"
          rules={[{required:true, message: 'Please input your Image!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="CategoryId"
          name="categoryId"
          rules={[{ required: true, message: 'Please select your Product Category!' }]}
        >
          <Select>
            {props.categories.map(item => <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>)}


          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Update Product
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default UpdateProduct