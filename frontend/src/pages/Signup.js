import React from "react"
import { Row, Col, Form, Input, Button, Typography, Divider } from "antd"
import MY_SERVICE from "../services"

const { Title } = Typography

const googleUrl = process.env.NODE_ENV === 'development' ?
  "http://localhost:3000/auth/google" : '/auth/google'

const Signup = ({ history }) => {
  const [form] = Form.useForm()

  async function handleSubmit(userInput) {
    await MY_SERVICE.signup(userInput)
    console.log(userInput)
    history.push("/login")
  }

  return (
    <Row>
      <Col span={24}>
        <Title level={1}>Signup</Title>
      </Col>
      <Divider />
      <Col span={24}>
        <Form layout="vertical" form={form} onFinish={handleSubmit}>
          <Form.Item rules={[{ required: true }]} name="email" label="Email">
            <Input />
          </Form.Item>
          <Form.Item
            rules={[{ required: true }]}
            name="password"
            label="Password"
          >
            <Input.Password />
          </Form.Item>
          <Button type="primary" block htmlType="submit">
            Signup
          </Button>
        </Form>
        <Divider>
          Or
        </Divider>
        <a href={googleUrl}>
          <Button block> <i class="fab fa-google"></i>  &nbsp; Signup with Google </Button>
        </a>
      </Col>
    </Row>
  )
}

export default Signup
