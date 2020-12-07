import { useHistory } from "react-router-dom"
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
  Modal,
  Spin,
} from "antd"
import { toast } from "react-toastify"
import WorkoutForm from "../components/Dashboard/WorkoutForm"
import Exercises from "./Exercises"
const { Search } = Input

const CreateWorkout = () => {
  const { user } = useContextInfo()
  const history = useHistory()
  //   const go = (path) => history.push(path)
  const [exercises, setExercises] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [newData, setNewData] = useState(false)
  const [show, setShow] = useState(false)
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
    setShow(true)
    if (exerciseArr.length === 6)
      toast.error("You can only add up to 6 exercises per workout.")
    if (exerciseArr.length < 6) {
      setExerciseArr((exerciseArr) => [...exerciseArr, item])
    }
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
          <br/>
          <Row>
            <Typography.Paragraph>
              You can create your workout form a variaty of exercises, just look
              for them on the search bar.
            </Typography.Paragraph>
          </Row>

          {show ? <WorkoutForm exerciseArr={exerciseArr}></WorkoutForm> : null}
          {show ? (
            <>
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
                  <br/>
                  <br/>
                  {show ? (
            <Button
              danger
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
                </Form>
              </Col>
            </>
          ) : null}
          <br />
          {/* {show ? (
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
          ) : null} */}
          
        </div>

        <div className="right">
   
            <Typography.Title level={4}>
           Let's get started!
            </Typography.Title>
  
          <Typography.Paragraph>
            <p>
            You can browse specific exercise by name or even by muscle group
            i.e., "Lower Body", "Upper Body", "Tricep", "Leg".
            <br />
            Select an exercise to see a quick video demonstrating how to perform
            the movement correctly and decide whether to add it to your workout
            or not.
            </p>
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
                  <Col xs={24} sm={24} md={24} lg={24} key={item._id}>
                    <Card>
                      <img
                        onClick={() => showModal(item.videoUrl)}
                        style={{ width: "30%" }}
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
                        style={{ width: "30%" }}
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
    // <>
    // {isModalVisible ? (
    //   <Modal
    //     visible={isModalVisible}
    //     title="How to perform the exercise"
    //     onCancel={handleCancel}
    //     footer={[
    //       <Button key="submit" type="primary" onClick={handleOk}>
    //         Okay
    //       </Button>,
    //     ]}
    //   >
    //  <ReactPlayer url={modalVideoUrl} width="100%" height="260px" />
    //   </Modal>
    // ) : null}

    // {show ? <WorkoutForm exerciseArr={exerciseArr}></WorkoutForm> : null}
    // {show ? (
    //   <>
    //     {/* <Divider /> */}
    //     <Col span={24}>
    //       <Form form={form} layout="vertical" onFinish={handleSubmit}>
    //         <Form.Item
    //           rules={[{ required: true }]}
    //           name="name"
    //           label="Name your workout"
    //         >
    //           <Input />
    //         </Form.Item>
    //         <Form.Item
    //           name="exercise"
    //           label="Select a difficulty level for your workout according to exercise selection"
    //           rules={[{ required: true }]}
    //         >
    //           <Select>
    //             <Select.Option value="Begginer">Begginer</Select.Option>
    //             <Select.Option value="Intermediate">
    //               Intermediate
    //             </Select.Option>
    //             <Select.Option value="Advanced">Advanced</Select.Option>
    //           </Select>
    //         </Form.Item>
    //         <Button type="primary" block size="middle" htmlType="submit">
    //           Create Wrokout
    //         </Button>
    //       </Form>
    //     </Col>
    //   </>
    // ) : null}
    // <br />
    // {show ? (
    //   <Button
    //     type="danger"
    //     block
    //     size="middle"
    //     onClick={() => {
    //       setShow(false)
    //       setExerciseArr([])
    //     }}
    //   >
    //     Cancel
    //   </Button>
    // ) : null}
    // <Row gutter={[16, 16]}>
    //   <Col xs={24}>
    //     <Typography.Title level={4} style={{ margin: "2rem 0" }}>
    //       Select exercises to add
    //     </Typography.Title>
    //     <Typography.Paragraph ellipsis>
    //       You can browse specific exercise by name or even by muscle group
    //       i.e., "Lower Body", "Upper Body", "Tricep", "Leg".
    //     </Typography.Paragraph>
    //     <Typography.Paragraph ellipsis>
    //       Select an exercise to see a quick video demonstrating how to perform the movement correctly and decide whether to add it to your workout or not.
    //     </Typography.Paragraph>

    // <Search
    //   value={searchQuery}
    //   onChange={onChange}
    //   placeholder="Browse specific exercies to add"
    // />
    // <Divider />
    // {exercises.length === 0 && (
    //   <>
    //     <Skeleton></Skeleton>
    //     <Skeleton></Skeleton>
    //     <Skeleton></Skeleton>
    //   </>
    // )}
    // <Row gutter={[16, 16]}>
    //   {searchResults.length > 0 ? (
    //     searchResults.map((item) => (
    //       <>
    //         <Col xs={12} sm={12} md={6} lg={6} key={item._id}>
    //           <Card>
    //             <p>{item.name}</p>
    //             <img
    //               onClick={() => showModal(item.videoUrl)}
    //               style={{ width: "100%" }}
    //               src={item.imageUrl}
    //               alt=""
    //             />
    //             <br />
    //             <br />
    //             <Button
    //               primary
    //               block
    //               size="middle"
    //               onClick={() => showModal(item.videoUrl)}
    //             >
    //               <i class="fas fa-play-circle"></i>
    //             </Button>
    //             <br />
    //             <Button
    //               ghost
    //               block
    //               size="middle"
    //               onClick={() => addExercise(item)}
    //             >
    //               +
    //             </Button>
    //           </Card>
    //         </Col>
    //       </>
    //     ))
    //   ) : (
    //     <></>
    //   )}
    // </Row>

    // <Row gutter={[16, 16]}>
    //   {searchResults.length === 0 && newData === false ? (
    //     exercises.map((item) => (
    //       <>
    //         <Col xs={12} sm={12} md={6} lg={6} key={item._id}>
    //           <Card>
    //             <p>{item.name}</p>
    //             <img
    //               onClick={() => showModal(item.videoUrl)}
    //               style={{ width: "100%" }}
    //               src={item.imageUrl}
    //               alt=""
    //             />
    //             <br />
    //             <br />
    //             <Button
    //               primary
    //               block
    //               size="middle"
    //               onClick={() => showModal(item.videoUrl)}
    //             >
    //               <i class="fas fa-play-circle"></i>
    //             </Button>
    //             <br />
    //             <Button
    //               ghost
    //               block
    //               size="middle"
    //               onClick={() => addExercise(item)}
    //             >
    //               +
    //             </Button>
    //           </Card>
    //         </Col>
    //       </>
    //     ))
    //   ) : (
    //     <></>
    //   )}
    //   {newData === true && searchResults.length === 0 ? (
    //     <p>NO HAY RESULTADOS</p>
    //   ) : (
    //     <></>
    //   )}
    // </Row>
    //     </Col>
    //   </Row>

    // </>
  )
}

export default CreateWorkout

// <>

//   {show ? <WorkoutForm exerciseArr={exerciseArr}></WorkoutForm> : null}
//   {show ? (
//     <>
//       {/* <Divider /> */}
//       <Col span={24}>
//         <Form form={form} layout="vertical" onFinish={handleSubmit}>
//           <Form.Item
//             rules={[{ required: true }]}
//             name="name"
//             label="Name your workout"
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item
//             name="exercise"
//             label="Select a difficulty level for your workout according to exercise selection"
//             rules={[{ required: true }]}
//           >
//             <Select>
//               <Select.Option value="Begginer">Begginer</Select.Option>
//               <Select.Option value="Intermediate">
//                 Intermediate
//               </Select.Option>
//               <Select.Option value="Advanced">Advanced</Select.Option>
//             </Select>
//           </Form.Item>
//           <Button type="primary" block size="middle" htmlType="submit">
//             Create Wrokout
//           </Button>
//         </Form>
//       </Col>
//     </>
//   ) : null}
//   <br />
//   {show ? (
//     <Button
//       type="danger"
//       block
//       size="middle"
//       onClick={() => {
//         setShow(false)
//         setExerciseArr([])
//       }}
//     >
//       Cancel
//     </Button>
//   ) : null}
//   <Row gutter={[16, 16]}>
//     <Col xs={24}>
//       <Typography.Title level={4} style={{ margin: "2rem 0" }}>
//         Select exercises to add
//       </Typography.Title>
//       <Typography.Paragraph ellipsis>
//         You can browse specific exercise by name or even by muscle group
//         i.e., "Lower Body", "Upper Body", "Tricep", "Leg".
//       </Typography.Paragraph>
//       <Typography.Paragraph ellipsis>
//         Select an exercise to see a quick video demonstrating how to perform the movement correctly and decide whether to add it to your workout or not.
//       </Typography.Paragraph>

// </Row>
//     </Col>
//   </Row>

// </>
