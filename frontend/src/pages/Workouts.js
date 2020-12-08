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
                    <img alt="example" src="/exercise.jpg" />
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

// return (
//     <>
//       <Typography.Title level={3}>GetFit</Typography.Title>
//       <Row gutter={[16, 16]}>
//         {exercises?.map((ex) => (
//           <Col xs={12} sm={12} md={12} lg={6} key={ex._id}>
//             <img
//               style={{ width: "200px", padding: "10px" }}
//               src={ex.imageUrl}
//               alt=""
//             />
//             <Card title="Card title">
//               <Card
//                 type="inner"
//                 title="Inner Card title"
//                 extra={<a href="#">More</a>}
//               >
//                 Inner Card content
//               </Card>
//               <Card
//                 style={{ marginTop: 16 }}
//                 type="inner"
//                 title="Inner Card title"
//                 extra={<a href="#">More</a>}
//               >
//                 Inner Card content
//               </Card>
//             </Card>
//             {/* <Card>
//             <p>{ex.name}</p>

//             </Card> */}
//           </Col>
//         ))}
//       </Row>
//     </>
//   )
