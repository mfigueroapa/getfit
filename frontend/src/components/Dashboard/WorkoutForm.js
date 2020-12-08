import React from "react"
import { useContextInfo } from "../../hooks/context"
import {
  Card,
  Col,
  Row,
  Button
} from "antd"

function WorkoutForm({ exerciseArr }) {

  const deleteHandle = (ex) => {
    console.log("this is the id of the item",ex.name, ex._id)
    // CreateWorkout.deleteElement(ex)
    // deleteElement(ex)
    // console.log("ARR: ",exerciseArr)
    // setExerciseArr(exerciseArr.pop())
    // console.log("ARR: ",exerciseArr)

  }
  return (
    <>
      <div className="workout-form">
        <div className="site-card-wrapper">
          <Row gutter={16}>
            {exerciseArr.map((ex) => (
              <>
                <Col xs={24} sm={24} md={24} lg={24} key={ex._id}>
                  <Card>
                    <div className="text">
                      <span>
                        <p>{ex.name}</p>
                      </span>
                      <p>{ex.muscle_group}</p>
                    </div>
                    <Button
                        primary
                        block
                        size="middle"
                        onClick={() => deleteHandle(ex)}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </Button>
                  </Card>
                </Col>
              </>
            ))}
          </Row>
        </div>
      </div>
    </>
  )
}

export default WorkoutForm
