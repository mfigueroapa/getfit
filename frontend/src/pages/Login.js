import React from "react"
import { Row, Col, Form, Input, Button, Typography, Divider } from "antd"
import MY_SERVICE from "../services"
import { useContextInfo } from "../hooks/context"

const { Title } = Typography

const Login = ({ history }) => {
  const { login } = useContextInfo()
  const [form] = Form.useForm()

  async function handleSubmit(userInput) {
    const { data } = await MY_SERVICE.login(userInput)
    login(data.user)
    // console.log("data exercise: ", data.user.exercise)
    if (data.user.exercise === "") {
        history.push("/new-user-form")
    } else {
        history.push("/dashboard")
    }
  }

  return (
    <Row>
      <Col span={24}>
        <Title level={1}>Login</Title>
      </Col>
      <Divider />
      <Col span={24}>
        <Form layout="vertical" form={form} onFinish={handleSubmit}>
          <Form.Item 
          rules={[{ required: true }]} 
          name="email" label="Email">
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
            Login
          </Button>
        </Form>
      </Col>
    </Row>
  )
}

export default Login
