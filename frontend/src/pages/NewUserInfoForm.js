import React, {useEffect} from "react"
import {
  Form,
  Button,
  Input,
  Col,
  Divider,
  Select,
  Row,
  Typography,
  InputNumber
} from "antd"
import MY_SERVICE from "../services"
import { useContextInfo } from "../hooks/context"
const { Title } = Typography


const NewUserInfoForm = ({ history }) => {
  const [form] = Form.useForm()
  const { updateUserCtx, user, login} = useContextInfo()

    useEffect(() => {
      console.log("useEff from newuserinfolala.")
      async function getUser() {
        try {
          const { user } = await MY_SERVICE.isAuth()
          console.log("esta fue la respuesta del server.. ,", user)
          login(user)
          console.log("meotodo getUser asincrono")
        } catch {}
      }
      getUser()
    }, [])

  async function handleSubmit(userInputValues) {
    console.log("usuario desde newuser ifno",user)
    // updateUserCtx(userInputValues)
    // history.push("/dashboard")
  }

  return (
    <Row>
      <Col span={24}>
        <Title level={2}>
          Before we proceed, please fill the information required
        </Title>
      </Col>
      <Divider />
      <Col span={24}>
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            rules={[{ required: true }]}
            name="username"
            label="Username"
          >
            <Input />
          </Form.Item>
          <Form.Item rules={[{ required: true }]} name="weight" label="Weight in kilos">
            <Input />
          </Form.Item>
          <Form.Item rules={[{ required: true }]} name="height" label="Height in cms">
            <Input />
          </Form.Item>
          <Form.Item
            name="exercise"
            label="What bests describe your training history"
            rules={[{ required: true }]}
          >
            <Select>
              <Select.Option value="Begginer">
                Not at all or been training less than 6 months
              </Select.Option>
              <Select.Option value="Intermediate">
                Been training less than 2 years
              </Select.Option>
              <Select.Option value="Advanced">
                Been training for more than 2 years
              </Select.Option>
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
