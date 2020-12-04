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
            {/* <img
              style={{ width: "200px", padding: "10px" }}
              src={ex.imageUrl}
              alt=""
            /> */}
            <Card title={ex.name}>
              <Card
                type="inner"
                title={ex.muscle_group}
                // extra={<a href={ex.videoUrl}>YouTube</a>}
              >
               <Typography.Title level={5}>How to perform</Typography.Title>
              {ex.videoUrl ? (<ReactPlayer 
                url={ex.videoUrl} 
                width='100%'
                height='260px'
                />) : 
                (<Spin/>)}
                
              </Card>
              {/* <Card
                style={{ marginTop: 16 }}
                type="inner"
                title="Inner Card title"
                extra={<a href="#">More</a>}
              >
                Inner Card content
              </Card> */}
            </Card>
            {/* <Card>
            <p>{ex.name}</p>

            </Card> */}
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Exercises

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
