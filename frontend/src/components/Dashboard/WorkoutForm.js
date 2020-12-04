import React, { useEffect, useState } from "react"
import { useContextInfo } from "../../hooks/context"
import { Card, Col, Row, Typography } from "antd"
const {Title} = Typography
function WorkoutForm({ exerciseArr }) {
  const [exercises, setExercises] = useState([])
  const { user } = useContextInfo()

  console.log("props from Form ", exerciseArr[0].name)
  return (
    <>
      <div className="site-card-wrapper">
        <Title level={5}>Add 6 exercises to create your workout</Title>
        <br/>
        <Row gutter={16}>
          {exerciseArr.map((ex) => (
            <>
              <Col span={8}>
                <Card
                  title={ <h6 style={{ width: "100%" }} >{ex.name} <br/> {ex.muscle_group}</h6>}
                  bordered={false}
                >
                  <img
                    src={ex.imageUrl}
                    alt="exercise"
                    style={{ width: "100%" }}
                  />
                </Card>
                <br/>
              </Col>
            </>
          ))}
          {/* <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col> */}
        </Row>
      </div>
    </>
  )
}

export default WorkoutForm
