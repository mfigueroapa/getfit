import React from "react"
import { Form, Button, Input, Col, Select, Row, Typography } from "antd"
import MY_SERVICE from "../services"
import { useContextInfo } from "../hooks/context"
import { toast } from "react-toastify"
import "./form.scss"
const { Title } = Typography
const { Option } = Select

const NewUserInfoForm = ({ history }) => {
  const [form] = Form.useForm()
  const { updateUserCtx } = useContextInfo()

  async function handleSubmit(userInputValues) {
    if (!userInputValues.weightPrefix)
      toast.error("Type of unit for weight must be selected")
    if (!userInputValues.heightPrefix)
      toast.error("Type of unit for height must be selected")

    if (userInputValues.weightPrefix && userInputValues.heightPrefix) {
      await MY_SERVICE.editInfo(userInputValues)
        .then((response) => {
          history.push("/dashboard")
          toast.success("Welcome to GetFit")
          userInputValues.profile_pic = response.data.user.profile_pic
          updateUserCtx(userInputValues)
        })
        .catch((error) => {
          toast.error("Weight and Height values must be number")
        })
    }
  }

  const weightPrefixSelector = (
    <Form.Item initialValue="kgs" name="weightPrefix" noStyle>
      <Select value="kgs" initialvalue="kgs" style={{ width: 70 }}>
        <Option value="kgs">kgs</Option>
        <Option value="lbs">lbs</Option>
      </Select>
    </Form.Item>
  )
  const heightPrefixSelector = (
    <Form.Item initialValue="cms" name="heightPrefix" noStyle>
      <Select initialvalue="cms" style={{ width: 70 }}>
        <Option value="cms">cms</Option>
        <Option value="ins">ins</Option>
      </Select>
    </Form.Item>
  )

  return (
    <Row id="form-style">
      <div className="form__content">
        <Col span={24}>
          <Title level={1}>
            set your profile
            <br />
            <span>and get started</span>
          </Title>
          <Typography.Paragraph>
            Before we proceed. Let us know more about yourself, are you a
            trainer or a enthusiastic athlete
          </Typography.Paragraph>
        </Col>
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
              <Input
                addonBefore={weightPrefixSelector}
                style={{ width: "100%" }}
                className="blk-input"
              />
            </Form.Item>
            <Form.Item
              rules={[{ required: true }]}
              name="height"
              label="Height"
              className="blk-input"
            >
              <Input
                addonBefore={heightPrefixSelector}
                style={{ width: "100%" }}
              />
            </Form.Item>
            <Form.Item
              name="user"
              label="Are you a regular user or a trainer who wants to create workouts?"
              rules={[{ required: true }]}
            >
              <Select>
                <Select.Option value="User">I'm a regular user!</Select.Option>
                <Select.Option value="Trainer">
                  I'm a trainer who can create workouts!
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

            <Form.Item
              name="email"
              label="email"
              initialValue={history.location.state.email}
              style={{ display: "none" }}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="_id"
              label="_id"
              initialValue={history.location.state._id}
              style={{ display: "none" }}
            >
              <Input />
            </Form.Item>

            <Button type="primary" block size="middle" htmlType="submit">
              Next
            </Button>
            <br />
            <br />
            <Typography.Paragraph ellipsis>
              This form only needs to be filled once.
            </Typography.Paragraph>
          </Form>
        </Col>
      </div>
    </Row>
  )
}

export default NewUserInfoForm
