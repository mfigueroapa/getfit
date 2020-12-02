import React, { useState } from "react"
import {
  Form,
  Button,
  Input,
  Col,
  Divider,
  Select,
  Row,
  Typography,
} from "antd"
const { Title } = Typography

const NewUserInfoForm = () => {
  const [form] = Form.useForm()
  async function handleSubmit(values) {
    // const job = {
    //   ...values,
    // //   image: img,
    //   salary: [values.salarymin, values.salarymax],
    // }
    // const { data: newJob } = await createJob(job)
    // addJob(newJob)
    // form.resetFields()
    // setImg(null)
  }

  return (
    <Row>
      <Col span={24}>
        <Title level={2}>Please fill the information required</Title>
      </Col>
      <Divider />
      <Col span={24}>
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item name="username" label="Username">
            <Input />
          </Form.Item>
          <Form.Item name="weight" label="Weight">
            <Input />
          </Form.Item>
          <Form.Item name="height" label="Height">
            <Input />
          </Form.Item>
          <Form.Item name="exercise" label="How ofter you exercise?">
            <Select>
              <Select.Option value="Begginer">Begginer</Select.Option>
              <Select.Option value="Intermediate">Intermediate</Select.Option>
              <Select.Option value="Avanzed">Avanzed</Select.Option>
            </Select>
          </Form.Item>
          <Button type="primary" block size="middle" htmlType="submit">
            Next
          </Button>
        </Form>
      </Col>
    </Row>
    // <Form form={form} layout="vertical" onFinish={handleSubmit}>
    //   <Form.Item name="username" label="Username:">
    //     <Input />
    //   </Form.Item>
    //   <Form.Item name="weight" label="Weight:">
    //     <Input />
    //   </Form.Item>
    //   <Form.Item name="height" label="Height:">
    //     <Input />
    //   </Form.Item>
    //   <Form.Item name="exercise" label="How ofter you exercise?">
    //     <Select>
    //       <Select.Option value="Begginer">Begginer</Select.Option>
    //       <Select.Option value="Intermediate">Intermediate</Select.Option>
    //       <Select.Option value="Avanzed">Avanzed</Select.Option>
    //     </Select>
    //   </Form.Item>
    //   <Button type="primary" block size="middle" htmlType="submit">
    //     Next
    //   </Button>
    // </Form>
  )
}

export default NewUserInfoForm
