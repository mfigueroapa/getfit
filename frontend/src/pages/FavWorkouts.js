import React, { useEffect, useState } from "react"
import { Row, Col, Card, Typography } from "antd"
import MY_SERVICE from "../services"
import { Link } from "react-router-dom"
import "./FavWorkouts.scss"

const { Title } = Typography

function FavWorkouts() {
  const [workouts, setWorkouts] = useState(null)

  useEffect(() => {
    async function getWorkoutsFunction() {
      const { data: allWorkouts } = await MY_SERVICE.getFavWorkouts()
      setWorkouts(allWorkouts.favWorkouts)
    }
    getWorkoutsFunction()
  }, [])

  async function deleteHandle(workout){
    console.log(workout)
    await MY_SERVICE.removeFavorite(workout)
    .then(response => {
        console.log(response.data.deletedWorkout)
        let arr =[]
        arr = workouts.filter((wk) => wk._id !== response.data.deletedWorkout)
        setWorkouts(arr)
    })
    
  }

  return (
    <>
      <div id="fav-workouts">
        <Row className="custom-header">
          <Col span={24}>
            <Title level={1}>
              Checkout
              <br />
              <span>Your Favorite Workouts!</span>
            </Title>
          </Col>
        </Row>
        <Row className="card-group">
          {workouts &&
            workouts.map((elm) => (
              <Col span={6} key={elm._id}>
                <Link to={`/workouts/${elm._id}`}>
                  <Card key={elm._id}>
                    <div className="img-card-container">
                      <img alt="example" src={elm.image} />
                    </div>
                    <div className="card-content">
                      <div>
                        <p className="card-title">{elm.name} </p>
                        <p className="card-text">{elm.level}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
                <div className="delete-icon-content">
                  <i
                    onClick={() => {
                      deleteHandle(elm)
                    }}
                    className="fas fa-trash-alt"
                  ></i>
                </div>
              </Col>
            ))}
        </Row>
      </div>
    </>
  )
}

export default FavWorkouts
