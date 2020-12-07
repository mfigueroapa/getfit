import React from "react"
import "./home.scss"
import { Row, Col, Card, Typography } from "antd"

const { Title } = Typography
const { Meta } = Card;

function Home() {

  return (
    <div id="home">
      <Row className="hero">
        <Col span={24}>
          <Title level={1}>
            Best Training
            <br/> 
            <span>For You</span>
          </Title>
          <p>We have Prepared The Best Exercises to keep you moving</p>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Title level={4}>
            Best Training
          </Title>
        </Col>
      </Row>
      <Row className="card-group">
      <Col span={6}>
      <Card>
          <div>
          <img alt="example" src="/exercise.jpg"/>
          </div>
          <div className="card-content">
            <p className="card-title">Mentality Challenge</p>
            <p className="card-text">feel better emotionally and phsically with a few minuts of exercise a day</p>
          </div>
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <div>
          <img alt="example" src="/exercise.jpg"/>
          </div>
          <div className="card-content">
            <p className="card-title">Boost Your Mood</p>
            <p className="card-text">Feel better with a bit of exercise, just 20min a day</p>
          </div>
        </Card>
      </Col>
      <Col span={6}>
      <Card>
          <div>
          <img alt="example" src="/exercise.jpg"/>
          </div>
          <div className="card-content">
            <p className="card-title">For Small Spaces</p>
            <p className="card-text">No need of a gym or a big space to stay Healthy</p>
          </div>
        </Card>
      </Col>
      <Col span={6}>
      <Card>
          <div>
          <img alt="example" src="/exercise.jpg"/>
          </div>
          <div className="card-content">
            <p className="card-title">For The Whole Family</p>
            <p className="card-text">exercises for all the family members</p>
          </div>
        </Card>
      </Col>
    </Row>
    <Row className="section promo-1">
      <Col span={24}>
        <Title level={1}>
          Get Healthy
          <br/> 
          <span>And Start Moving</span>
        </Title>
        <p>We have Prepared The Best Exercises to keep you moving</p>
      </Col>
    </Row>
    <Row className="section section-inverse promo-2">
      <Col span={24}>
        <Title level={1}>
          Get Known
          <br/> 
          <span>And Get Notice</span>
        </Title>
        <p>We have Prrepared The Best Exercises to keep you moving</p>
      </Col>
    </Row>
    </div>
  )
}

export default Home
