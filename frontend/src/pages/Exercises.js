import React, { useEffect, useState } from "react"
import { Row, Col, Card, Typography, Spin } from "antd"
import ReactPlayer from "react-player"
import MY_SERVICE from "../services"

function Exercises() {
  const [exercises, setExercises] = useState(null)
  useEffect(() => {
    async function getData() {
      const { data: allExercises } = await MY_SERVICE.getExercises()
      setExercises(allExercises)
    }
    getData()
  }, [])
  return (
    <>
      <Typography.Title level={3}>GetFit</Typography.Title>
      <Row gutter={[16, 16]}>
        {exercises?.map((ex) => (
          <Col xs={24} sm={24} md={12} lg={8} key={ex._id}>
            <Card title={ex.name}>
              <Card type="inner" title={ex.muscle_group}>
                <Typography.Title level={5}>How to perform</Typography.Title>
                {ex.videoUrl ? (
                  <ReactPlayer url={ex.videoUrl} width="100%" height="260px" />
                ) : (
                  <Spin />
                )}
              </Card>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Exercises
