import React, { useEffect, useState } from "react"
import { useContextInfo } from "../../hooks/context"
import {
  Card,
  Col,
  Row,
  Typography,
  Form,
  Button,
  Input,
  InputNumber,
  Divider,
  Select
} from "antd"
const { Title } = Typography


function WorkoutForm({ exerciseArr }) {
  const [exercises, setExercises] = useState([])
  const { user } = useContextInfo()
  async function handleSubmit(userInputValues) {
   console.log(userInputValues)

    
  }
  return (
    <>
      <div className="site-card-wrapper">
        <Title level={4}>Selected exercises for your new routine</Title>
        <Divider />
        <Row gutter={16}>
          {exerciseArr.map((ex) => (
            <>
              <Col span={8}>
                <Card
                  title={
                    <h6 style={{ width: "100%" }}>
                      {ex.name} <br /> {ex.muscle_group}
                    </h6>
                  }
                  bordered={false}
                >
                  <img
                    src={ex.imageUrl}
                    alt="exercise"
                    style={{ width: "100%" }}
                  />
                </Card>
                <br />
              </Col>
            </>
          ))}
        </Row>
        <br />
        
        <br />
      </div>
    </>
  )
}

export default WorkoutForm
{/* <Form.Item rules={[{ required: true }]} name={["user", "introduction"]} label="Description">
<Input.TextArea />
</Form.Item> */}