import { useHistory } from "react-router-dom"
import { useContextInfo } from "../hooks/context"
import MY_SERVICE from "../services"
import React, { useState, useEffect } from "react"
import {
  Typography,
  Row,
  Col,
  Skeleton,
  Divider,
  Input,
  Card,
  Form,
  Button,
  Select,
} from "antd"
import { toast } from "react-toastify"
import WorkoutForm from "../components/Dashboard/WorkoutForm"
import Exercises from "./Exercises"
const { Search } = Input
const style = {
  backgroundColor: "blue",
  marginTop: "5px",
}

const CreateWorkout = () => {
  const { user } = useContextInfo()
  const history = useHistory()
  const go = (path) => history.push(path)
  const [exercises, setExercises] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [newData, setNewData] = useState(false)
  const [show, setShow] = useState(false)
  const [exerciseArr, setExerciseArr] = useState([])
  const [form] = Form.useForm()

  useEffect(() => {
    async function getData() {
      const { data } = await MY_SERVICE.getExercises()
      setExercises(data)
    }
    getData()
  }, [])
  const onChange = (event) => {
    setSearchQuery(event.target.value)
    setNewData(true)
  }
  const addExercise = (item) => {
    setShow(true)
    if (exerciseArr.length === 6)
      toast.error("You can only add up to 6 exercises per workout.")
    if (exerciseArr.length < 6) {
      setExerciseArr((exerciseArr) => [...exerciseArr, item])
    }
  }

  useEffect(() => {
    const term = exercises
      ? exercises.filter(
          (ex) =>
            ex.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            ex.muscle_group.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : []
    setSearchResults(term)
  }, [searchQuery])

  async function handleSubmit(userInputValues) {
    MY_SERVICE.createWorkout({
      exercises: exerciseArr,
      name: userInputValues.name,
      image: "https://unsplash.com/photos/0Wra5YYVQJE",
      description: "This is a custom workout",
      level: userInputValues.exercise,
      round_rest: 20,
      set_rest: 60,
      repeat: 4,
      sets: 2,
      exercises_per_set: 3,
      created_by: user._id,
    })
  }
  return (
    <>
      {show ? <WorkoutForm exerciseArr={exerciseArr}></WorkoutForm> : null}
      {show ? (
        <>
          {/* <Divider /> */}
          <Col span={24}>
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
              <Form.Item
                rules={[{ required: true }]}
                name="name"
                label="Name your workout"
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="exercise"
                label="Select a difficulty level for your workout according to exercise selection"
                rules={[{ required: true }]}
              >
                <Select>
                  <Select.Option value="Begginer">Begginer</Select.Option>
                  <Select.Option value="Intermediate">
                    Intermediate
                  </Select.Option>
                  <Select.Option value="Advanced">Advanced</Select.Option>
                </Select>
              </Form.Item>
              <Button type="primary" block size="middle" htmlType="submit">
                Create Wrokout
              </Button>
            </Form>
          </Col>
        </>
      ) : null}
      <br />
      {show ? (
        <Button
          type="danger"
          block
          size="middle"
          onClick={() => {
            setShow(false)
            setExerciseArr([])
          }}
        >
          Cancel
        </Button>
      ) : null}
      <Row gutter={[16, 16]}>
        <Col xs={24}>
          <Typography.Title level={4} style={{ margin: "2rem 0" }}>
            Select exercises to add
          </Typography.Title>
          <Typography.Paragraph ellipsis>
          You can browse specific exercise by name or even by muscle group i.e., "Lower Body", "Upper Body", "Tricep", "Leg".
          </Typography.Paragraph>
          <Search
            value={searchQuery}
            onChange={onChange}
            placeholder="Browse specific exercies to add"
          />
          <Divider />
          {exercises.length === 0 && (
            <>
              <Skeleton></Skeleton>
              <Skeleton></Skeleton>
              <Skeleton></Skeleton>
            </>
          )}
          <Row gutter={[16, 16]}>
            {searchResults.length > 0 ? (
              searchResults.map((item) => (
                <>
                  <Col xs={12} sm={12} md={6} lg={6} key={item._id}>
                    <Card>
                      <p>{item.name}</p>
                      <img
                        style={{ width: "100%" }}
                        src={item.imageUrl}
                        alt=""
                      />
                      <br />
                      <br />
                      <Button
                        ghost
                        block
                        size="middle"
                        onClick={() => addExercise(item)}
                      >
                        +
                      </Button>
                    </Card>
                  </Col>
                </>
              ))
            ) : (
              <></>
            )}
          </Row>

          <Row gutter={[16, 16]}>
            {searchResults.length === 0 && newData === false ? (
              exercises.map((item) => (

                <>
                  <Col xs={12} sm={12} md={6} lg={6} key={item._id}>
                    <Card>
                      <p>{item.name}</p>
                      <img
                        style={{ width: "100%" }}
                        src={item.imageUrl}
                        alt=""
                      />
                      <br />
                      <br />
                      <Button
                        ghost
                        block
                        size="middle"
                        onClick={() => addExercise(item)}
                      >
                        +
                      </Button>
                    </Card>
                  </Col>
                </>
              ))
            ) : (
              <></>
            )}
            {newData === true && searchResults.length === 0 ? (
              <p>NO HAY RESULTADOS</p>
            ) : (
              <></>
            )}
          </Row>

          {/* <p onClick={() => console.log(exercises)}>Prueba de estado: </p> */}
        </Col>
      </Row>
    </>
  )
}

export default CreateWorkout
