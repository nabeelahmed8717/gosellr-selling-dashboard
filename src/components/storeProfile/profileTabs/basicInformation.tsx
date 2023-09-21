import React from 'react'
import "./profileTabs.scss"
import { Button, Col, Form, Input, Row } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const BasicInformation = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <div>
      <Form
        name="basic"
        className='global-form'
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        // autoComplete="off"
        layout="vertical">
        <Row gutter={20}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item
              label="Store Title"
              name="storeTitle"
              rules={[{ required: true, message: 'Required field' }]}
            >
              <Input placeholder="Type here" style={{ width: '100%', height: '40px' }} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item
              label="Store Availability"
              name="storeAvalibility"
              rules={[{ required: true, message: 'Required field' }]}
            >
              <Input placeholder="Type here" style={{ width: '100%', height: '40px' }} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item
              label="Store Discription"
              name="storeDiscription"
              rules={[{ required: true, message: 'Required field' }]}
            >
              <TextArea rows={4} placeholder="Type here" maxLength={6} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item
              label="Store Contact No"
              name="storeContactNo"
              rules={[{ required: true, message: 'Required field' }]}
            >
              <Input placeholder="Type here" style={{ width: '100%', height: '40px' }} />
            </Form.Item>
          </Col>
          <Button htmlType='submit' className='form-button'>Update</Button>
        </Row>
      </Form>
    </div>
  )
}

export default BasicInformation