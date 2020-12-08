import React, { useEffect, useState } from "react"
import { Row, Col, Typography, Card, Button } from "antd"
import { Link } from "react-router-dom"
import MY_SERVICE from "../../services"
import "./Feed.scss"
const { Title, Paragraph } = Typography

function Main() {
  const [workouts, setWorkouts] = useState(null)
  const [popular, setPopular] = useState(null)

  useEffect(() => {
    async function getWorkoutsFunction() {
      const { data: allWorkouts } = await MY_SERVICE.getWorkouts()
      const popularWorkouts = allWorkouts.slice(0,3)
      setPopular(popularWorkouts)
      setWorkouts(allWorkouts)
    }
    getWorkoutsFunction()
  }, [])

  return (
    <>
    <div id="dash-feed">
    <Row className="section feed-image">
      <Col span={24}>
        <Title level={1}>
          Look For The
          <br/> 
          <span>Latest Workouts?</span>
        </Title>
        <div className="button-container">
          <Link to="/workouts">
            <Button type="primary">See Workouts</Button>
          </Link>
        </div>
      </Col>
    </Row>
    <Row className="card-group">
    {popular && popular.map((elm, index)=> 
    <Col span={7} key={index}>
    <Link to={`/workouts/${elm._id}`}>
      <Card>
          <div>
          <img alt="example" src="/exercise.jpg"/>
          </div>
          <div className="card-content">
            <p className="card-title">{elm.name}</p>
            <Paragraph className="card-text" ellipsis>
              {elm.description}
            </Paragraph>
          </div>
        </Card>
      </Link>
      </Col>)}
      <Col span={3}>
        <div className="card-group__button-container">
          <Link to="/workouts">
            <div>
              <Button type="primary">See All</Button>
            </div>
          </Link>
        </div>
      </Col>
    </Row>
    <Row className="section feed">
      <Col span={24}>
        <Title level={1}>
          Looking for more? 
          <br/> 
          <span>let’s do a workout</span>
        </Title>
        <div className="feed__button-container">
          <Link to="/workouts">
            <Button type="primary">All Workouts</Button>
          </Link>
        </div>
      </Col>
    </Row>
    </div>
    </>
  )
}

export default Main
