import React, { useEffect } from "react"
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
import MY_SERVICE from "../services"
import { useContextInfo } from "../hooks/context"
import { toast } from "react-toastify"
const { Title } = Typography
const { Option } = Select

const NewUserInfoForm = ({ history }) => {
  const [form] = Form.useForm()
  const { updateUserCtx, login } = useContextInfo()

  async function handleSubmit(userInputValues) {
    if (!userInputValues.weightPrefix) toast.error("Type of unit for weight must be selected")
    if (!userInputValues.heightPrefix) toast.error("Type of unit for height must be selected")

    if (userInputValues.weightPrefix && userInputValues.heightPrefix) {
      await MY_SERVICE.editInfo(userInputValues)
    .then(response => {
      toast.success("Welcome to GetFit")
      login(response.data.data.user)
      updateUserCtx(userInputValues)
      history.push("/dashboard")
    }).catch(error => {
      toast.error("Weight and Height values must be number")
    })
    }
  }

  const weightPrefixSelector = (
    <Form.Item name="weightPrefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="kgs">kgs</Option>
        <Option value="lbs">lbs</Option>
      </Select>
    </Form.Item>
  )
  const heightPrefixSelector = (
    <Form.Item name="heightPrefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="cms">cms</Option>
        <Option value="ins">ins</Option>
      </Select>
    </Form.Item>
  )

  return (
    <Row>
      <Col span={24}>
        <Title level={3}>
          We're almost there! 
        </Title>
        <Typography.Paragraph ellipsis>
        Before we proceed, please help us filling the form below as it will help us to give you a better experience. <br/>
          </Typography.Paragraph>
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
          <Form.Item
            rules={[{ required: true }]}
            name="weight"
            label="Weight"
          >
            <Input addonBefore={weightPrefixSelector} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            rules={[{ required: true }]}
            name="height"
            label="Height"
          >
            <Input addonBefore={heightPrefixSelector} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            name="user"
            label="Are you a regular user or a trainer who wants to create workouts?"
            rules={[{ required: true }]}
          >
            <Select>
              <Select.Option value="User">
                I'm a regular user who wants to get fit and explore or try new workouts!
              </Select.Option>
              <Select.Option value="Trainer">
                I'm a trainer who can create specific workouts according to somebody's specific needs!
              </Select.Option>
            </Select>
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
          <br/>
          <br/>
          <Typography.Paragraph ellipsis>
         This form only needs to be filled once.
          </Typography.Paragraph>
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
