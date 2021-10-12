import { Button, Form, Input } from 'antd';
import React from 'react';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const InputForm:React.FC<any> = () =>{
 return (<Form
 layout="vertical"
  labelCol={{ span: 8 }}
  wrapperCol={{ span: 16 }}
  initialValues={{ remember: true }}
  onFinish={onFinish}
  onFinishFailed={onFinishFailed}
  autoComplete="off"
>
  <Form.Item
    label="Organization"
    name="Organization"
    rules={[{ required: true, message: 'Please enter a valid organization name' }]}
  >
    <Input />
  </Form.Item>

  <Form.Item
    label="Organization's City"
    name="city"
    rules={[{ required: true, message: 'Please enter a valid city' }]}
  >
    <Input/>
  </Form.Item>

  <Form.Item
    label="Your Full Name"
    name="name"
    rules={[{ required: true, message: 'Please enter your full name' }]}
  >
    <Input/>
  </Form.Item>

  <Form.Item
    label="Your Mobile Number"
    name="mobileNumber"
    rules={[{ required: true, message: 'Please enter your mobile number' }]}
  >
    <Input/>
  </Form.Item>

  <Form.Item>
    <Button type="primary" htmlType="submit">
      Start Enrollment
    </Button>
  </Form.Item>
</Form>)
}

export default InputForm; 