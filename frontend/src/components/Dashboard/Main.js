import React, { useEffect, useState } from "react"
import { Row, Col, Card, Typography, Carousel } from "antd"
import { Link } from "react-router-dom"
import ReactPlayer from "react-player"
import MY_SERVICE from "../../services"
import { useContextInfo } from "../../hooks/context"

function Main() {
  const { user } = useContextInfo()
  const [workouts, setWorkouts] = useState(null)

  useEffect(() => {
    async function getWorkoutsFunction() {
      const { data: allWorkouts } = await MY_SERVICE.getWorkouts()
      setWorkouts(allWorkouts)
    }
    getWorkoutsFunction()
  }, [])
  console.log(workouts)

  const contentStyle1 = {
    height: "300px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    backgroundImage: `url(https://static.nike.com/a/images/f_auto/dpr_1.0/w_1754,c_limit/c1d56631-94f2-4be4-be26-fa05b68a6234/nike-training-club-app-entrenamientos-en-casa-y-mucho-ms.jpg)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }
  const contentStyle2 = {
    height: "300px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    backgroundImage: `url(https://d2z0k43lzfi12d.cloudfront.net/blog/vcdn314/wp-content/uploads/2020/11/thumbnail_1200x800-1-1024x683.jpg)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }
  const contentStyle3 = {
    height: "300px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    backgroundImage: `url(https://ruizhealytimes.com/wp-content/uploads/2020/08/gym-coronavirus-1-2048x1365.jpg)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }

  return (
    <>
      <br />
      <Typography.Title level={1}>Let's start working out!</Typography.Title>
      <br />
      <Row gutter={[16, 16]}>
        {/* <Col xs={12} sm={12} md={12} lg={6} key={ex._id}> */}
        <Col xs={24} sm={24} md={24} lg={24}>
          <Typography.Title level={3}>
            Try the workouts we already made for you!
          </Typography.Title>
          <Carousel autoplay>
            {workouts?.map((workout) => (
              <div key={workout._id}>
                <h3 style={contentStyle1}>{workout.name}</h3>
              </div>
            ))}
          </Carousel>
          <br />
          <Typography.Title level={3}>Your customs Workouts</Typography.Title>
          <Carousel>
            <div>
              <h3 style={contentStyle2}>Your workouts</h3>
            </div>
          </Carousel>
          <br />
          <Typography.Title level={3}>Browse your exercises!</Typography.Title>
          <Carousel>
            <div>
              <Link to="/exercises">
                <h3 style={contentStyle3}>Exercises</h3>
              </Link>
            </div>
          </Carousel>
        </Col>
      </Row>
    </>
  )
}

export default Main
