import { Button, Form, Input, notification } from 'antd'
import React, { useEffect, useState } from 'react'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { IUser } from '../types/user';
import { getAllUsers } from '../api/user';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import instance from '../api/instance';

interface IProps {
  onSignIn: () => void
  users: IUser[]
}


const SignIn = (props: IProps) => {
  //hàm xử lý đăng nhập
  const handleSignIn = async (email: string, password: string) => {
    try {
      const response = await instance.post('auth/signin', { email, password });
      if (response.status === 200) {
        console.log('Đăng nhập thành công');
        // redirect to homepage or do something else
        console.log(response.data.accessToken)
      }
    } catch (error) {
      console.error(error);
      console.log('Đăng nhập thất bại');
      // show error message to user
    }
  }

  const navigate = useNavigate()
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    
    handleSignIn(values.email, values.password)
    // let eLoop = false;
    // props.users.filter(item => {
    //   if (item.name == values.name && item.password == values.password) {
    //     eLoop = true;
        
    //     // localStorage.setItem('token', "true");
    //     navigate('/')

    //     notification.success({
    //       message: 'Đăng nhập thành công',
    //       description: 'Welcome back!',
    //     });


    //   }

    // })
    // if (!eLoop) { // nếu chưa thông báo thì mới hiển thị thông báo
    //   notification["error"]({
    //     message: 'Đăng nhập fail',
    //     description: 'HEHE',
    //   });

    // }

  };
  return (
    <div>
      <Form
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default SignIn