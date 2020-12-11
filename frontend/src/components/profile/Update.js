import React from "react"
import { useContextInfo } from "../../hooks/context"
import MY_SERVICE from "../../services"
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Select,
  message,
  Typography,
} from "antd"

const { Title } = Typography

function Update({ handleInfo }) {
  const { user, updateUserCtx } = useContextInfo()
  const [form] = Form.useForm()
  async function submitForm(data) {
    let send = true
    Object.entries(data).map((val) => {
      if (val[1] === undefined) {
        message.error(`Campo ${val[0]} vacio`)
        send = false
      }
    })
    if (send) {
      await MY_SERVICE.updateUser(user._id, data)
      form.resetFields()
      updateUserCtx(data)
      handleInfo()
    }
  }

  return (
    <div style={{ padding: "1rem 3rem" }}>
      <Row>
        <div>
          <Title level={4}>Update Profile</Title>
        </div>
        <Col span={24}>
          <Form form={form} layout="vertical" onFinish={submitForm}>
            <Form.Item
              name="username"
              label="Username:"
              initialValue={user.username}
            >
              <Input />
            </Form.Item>

            <Form.Item name="email" label="Email:" initialValue={user.email}>
              <Input />
            </Form.Item>

            <Form.Item
              name="exercise"
              label="Exercise:"
              initialValue={user.exercise}
            >
              <Select>
                <Select.Option value="Begginer">Begginer</Select.Option>
                <Select.Option value="Intermediate">Intermediate</Select.Option>
                <Select.Option value="Advanced">Adavnced</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="height"
              label="Height:"
              initialValue={user.height.value}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="weight"
              label="Weight:"
              initialValue={user.weight.value}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="profile_pic"
              label="profile_pic:"
              initialValue={user.profile_pic}
              style={{ display: "none" }}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="_id"
              label="_id"
              initialValue={user._id}
              style={{ display: "none" }}
            >
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
