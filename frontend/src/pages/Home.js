import React, {useEffect, useState} from "react"
import { Row, Col, Card, Typography } from "antd"
import ReactPlayer from "react-player"
import MY_SERVICE from '../services'

function Home() {
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
      <Typography.Title level={1}>GetFit</Typography.Title>
      <Row gutter={[16, 16]}>
        {exercises?.map((ex) => (
          <Col xs={12} sm={12} md={12} lg={6} key={ex._id}>
            <img
              style={{ width: "200px", padding: "10px" }}
              src={ex.imageUrl}
              alt=""
            />
            <Card extra>
              <p>{ex.name}</p>
              <p>{ex.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Home
