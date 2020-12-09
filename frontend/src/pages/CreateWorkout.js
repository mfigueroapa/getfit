import { useContextInfo } from "../hooks/context"
import MY_SERVICE from "../services"
import ReactPlayer from "react-player"
import "./CreateWorkout.scss"
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
  Modal
} from "antd"
import { toast } from "react-toastify"
const { Search } = Input

const CreateWorkout = ({history}) => {
  const { user } = useContextInfo()
  // const history = useHistory()
  const [exercises, setExercises] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [newData, setNewData] = useState(false)
  const [exerciseArr, setExerciseArr] = useState([])
  const [form] = Form.useForm()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [modalVideoUrl, setModalVideoUrl] = useState("")

  useEffect(() => {
    async function getData() {
      toast.success(
        "Click on an exercise to see a preview of how to peform the movement correctly! "
      )
      const { data } = await MY_SERVICE.getExercises()
      setExercises(data)
    }
    getData()
  }, [])

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

  const onChange = (event) => {
    setSearchQuery(event.target.value)
    setNewData(true)
  }

  const addExercise = (item) => {
    if (exerciseArr.includes(item) && exerciseArr.length < 6)
      toast.error("Exercise already added, try a different one.")
    if (exerciseArr.length === 6)
      toast.error("You can only add up to 6 exercises per workout.")
    if (exerciseArr.length < 6 && exerciseArr.includes(item) === false) {
      setExerciseArr((exerciseArr) => [...exerciseArr, item])
    }
  }

  const deleteHandle = (exercise) => {
    let arr = []
    arr = exerciseArr.filter((ex) => ex._id !== exercise._id)
    setExerciseArr(arr)
  }

  const showModal = (url) => {
    setModalVideoUrl(url)
    setIsModalVisible(true)
  }
  const handleCancel = () => {
    setIsModalVisible(false)
  }
  const handleOk = () => {
    setIsModalVisible(false)
  }
  async function handleSubmit(userInputValues) {
    if (exerciseArr.length === 6) {
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
        .then((response) => {
          setExerciseArr([])
          history.push("/workouts")
        })
        .catch((error) => {})
    } else {
      toast.error("Your workout needs to contain 6 exercises to be created")
    }
  }
  return (
    <>
      {isModalVisible ? (
        <Modal
          visible={isModalVisible}
          title="How to perform the exercise"
          onCancel={handleCancel}
          footer={[
            <Button key="submit" type="primary" onClick={handleOk}>
              Okay
            </Button>,
          ]}
        >
          <ReactPlayer url={modalVideoUrl} width="100%" height="260px" />
        </Modal>
      ) : null}

      <div id="create-workout">
        <div className="left">
          <Row>
            <Typography.Title level={1}>
              CREATE A <span>NEW WORKOUT</span>
            </Typography.Title>
          </Row>
          <br />
          <Row>
            <Typography.Paragraph>
              <p>
                Start by clicking the + button of the exercise you want to add. You can type in the searchbar any exercise name or even a muscle group to start getting results
                i.e., "Lower Body", "Upper Body", "Tricep", "Leg".
                <br />
                <br />
                Don't forget to name your workout and select a difficulty level according to exercise selection.
              </p>
            </Typography.Paragraph>
          </Row>
          <br />
          <br />
          <br />
          <p className="your-workout">YOUR WORKOUT</p>
          {/* <WorkoutForm exerciseArr={exerciseArr}></WorkoutForm> */}
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
          <>
            <Col span={24}>
              <Form form={form} layout="vertical" onFinish={handleSubmit}>
                
                <Form.Item
                  rules={[{ required: true }]}
                  name="name"
                  label="Name your workout"
                >
                  <Input value="asd" />
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
                <br />
                <br />
                <Button
                  danger
                  block
                  size="middle"
                  onClick={() => {
                    setExerciseArr([])
                  }}
                >
                  Clear
                </Button>
              </Form>
            </Col>
          </>
          <br />
        </div>

        <div className="right">
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
                  <Col xs={24} sm={24} md={24} lg={24} key={item._id}>
                    <Card>
                      <img
                        onClick={() => showModal(item.videoUrl)}
                        src={item.imageUrl}
                        alt=""
                      />
                      <div className="text">
                        <span>
                          <p>{item.name}</p>
                        </span>
                        <p>{item.muscle_group}</p>
                      </div>
                      <Button
                        primary
                        block
                        size="middle"
                        onClick={() => showModal(item.videoUrl)}
                      >
                        <i class="fas fa-play-circle"></i>
                      </Button>
                      <br />
                      <Button
                        ghost
                        block
                        size="middle"
                        onClick={() => addExercise(item)}
                      >
                        <i className="fas fa-plus"></i>
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
                  <Col xs={24} sm={24} md={24} lg={24} key={item._id}>
                    <Card>
                      <img
                        onClick={() => showModal(item.videoUrl)}
                        src={item.imageUrl}
                        alt=""
                      />
                      <div className="text">
                        <span>
                          <p>{item.name}</p>
                        </span>
                        <p>{item.muscle_group}</p>
                      </div>
                      <Button
                        primary
                        block
                        size="middle"
                        onClick={() => showModal(item.videoUrl)}
                      >
                        <i class="fas fa-play-circle"></i>
                      </Button>
                      <br />
                      <Button
                        primary
                        block
                        size="middle"
                        onClick={() => addExercise(item)}
                      >
                        <i className="fas fa-plus"></i>
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
        </div>
      </div>
    </>
  )
}

export default CreateWorkout
