import React, { useEffect, useState } from "react"
import { Row, Col, Card, Typography } from "antd"
import MY_SERVICE from "../services"
import { Link } from "react-router-dom"

const { Title } = Typography

function Workouts() {
  const [workouts, setWorkouts] = useState(null)

  useEffect(() => {
    async function getWorkoutsFunction() {
      const { data: allWorkouts } = await MY_SERVICE.getWorkouts()
      setWorkouts(allWorkouts)
    }
    getWorkoutsFunction()
  }, [])

  return (
    <>
      <Row className="custom-header">
        <Col span={24}>
          <Title level={1}>
            Checkout
            <br />
            <span>Our Workouts</span>
          </Title>
        </Col>
      </Row>
      <Row className="card-group">
        {workouts &&
          workouts.map((elm) => (
            <Col span={6} key={elm._id}>
              <Link to={`/workouts/${elm._id}`}>
                <Card key={elm._id}>
                  <div>
                    <img alt="example" src={elm.image} />
                  </div>
                  <div className="card-content">
                    <p className="card-title">{elm.name}</p>
                    <p className="card-text">{elm.level}</p>
                  </div>
                </Card>
              </Link>
            </Col>
          ))}
      </Row>
    </>
  )
}

export default Workouts
