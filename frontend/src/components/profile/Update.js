import React from 'react'
import { useContextInfo } from '../../hooks/context'
import MY_SERVICE from '../../services'
import {
  Row,
  Col,
  Typography,
  Form,
  Input,
  Button,
  Divider,
  Select,
  message,
  DatePicker
} from 'antd'

const { Title } = Typography;

function Update() {

  const { user, updateUserCtx } = useContextInfo()
  console.log(user)
  const [form] = Form.useForm()

  async function submitForm(data) {
    // TODO: Enviar el proyecto al backend... mediante nuestro servicio y..... Redirigir al inicio.
    let send = true
    Object.entries(data).map(val => {
      if (val[1] === undefined) {
        message.error(`Campo ${val[0]} vacio`)
        send = false
      }
    })
    if (send) {
      await MY_SERVICE.updateUser(user._id, data)
      form.resetFields()
      updateUserCtx(data)
    }
  }

  return (
    <div style={{ padding: '1rem 3rem' }}>
      <Row>
        <Col span={24}>
          <Form form={form} layout="vertical" onFinish={submitForm}>
            <Form.Item name="username" label="Username:">
              <Input />
            </Form.Item>

            <Form.Item name="email" label="Email:">
              <Input />
            </Form.Item>
            
            <Form.Item name="exercise" label="Exercise:">
              <Select>
                <Select.Option value="Begginer">
                  Begginer
                </Select.Option>
                <Select.Option value="Intermediate">
                  Intermediate
                </Select.Option>
                <Select.Option value="Advanced">
                  Adavnced
                </Select.Option>
              </Select>
            </Form.Item>

            <Form.Item name="height" label="Height:">
              <Input />
            </Form.Item>

            <Form.Item name="weight" label="Weight:">
              <Input />
            </Form.Item>

            <Button type="primary" block htmlType="submit">
              Update Profile
            </Button>

          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default Update