import React, { useState } from 'react'
import { IProduct } from '../../../types/product'
import { useNavigate } from 'react-router-dom'

import { Button, Checkbox, Form, Input, Select } from 'antd';
import { ICategory } from '../../../types/category';

interface IProps {
  categories: ICategory[]
  onAdd: (product: IProduct) => void
}
const AddProduct = (props: IProps) => {
  console.log(props.categories)
  const navigate = useNavigate()
  const onFinish = (values: any) => {
    props.onAdd(values);
    navigate('/admin/products')
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Product Name"
          name="name"
          rules={[{ required: true, message: 'Please input your Product name!' }]}
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
          label="Price"
          name="price"
          rules={[{ required: true, message: 'Please input your Price!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Images"
          name="image"
          rules={[{  message: 'Please input your Image!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="CategoryId"
          name="categoryId"
          rules={[{ required: true, message: 'Please select your Product Category!' }]}
        >
          <Select>
            {props.categories.map(item => <Select.Option key={item._id} value={item._id}>{item.name}</Select.Option>)}
            

          </Select>
        </Form.Item>



        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default AddProduct