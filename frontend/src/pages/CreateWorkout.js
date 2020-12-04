import { useHistory } from "react-router-dom"
import { useContextInfo } from "../hooks/context"
import MY_SERVICE from "../services"
import React, { useState, useEffect } from "react"
import { Typography, Row, Col, Skeleton, Divider, Input } from "antd"
import { toast } from "react-toastify"
import WorkoutForm from "../components/Dashboard/WorkoutForm"
import Exercises from "./Exercises"

const { Search } = Input
const style = {
  backgroundColor: "blue",
  marginTop: "5px",
}

const CreateWorkout = () => {
  const history = useHistory()
  const go = (path) => history.push(path)
  const [exercises, setExercises] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [newData, setNewData] = useState(false)
  const [show, setShow] = useState(false)
  const [exerciseArr, setExerciseArr] = useState([])

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
  return (
    <>
      {show ? <WorkoutForm exerciseArr={exerciseArr}></WorkoutForm> : null}
      {show ? (
        <button
          style={{ color: "white", background: "#000" }}
          onClick={() => {
            //create workout maybe post?
          }}
        >
          Creacte workout!
        </button>
      ) : null}
      <br />
      <br />
      {show ? (
        <button
          style={{ color: "white", background: "#000" }}
          onClick={() => {
            setShow(false)
            setExerciseArr([])
          }}
        >
          Cancel workout creation
        </button>
      ) : null}
      <Row gutter={[16, 16]}>
        <Col xs={24}>
          <Typography.Title level={4} style={{ margin: "2rem 0" }}>
            Browse excerices and add them
          </Typography.Title>
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
          {searchResults.length > 0 ? (
            searchResults.map((item) => (
              <>
                <div style={style}>
                  <li key={item._id}>{item.name}</li>
                  <button
                    style={{ color: "black" }}
                    onClick={() => {
                      setShow(true)
                      console.log(item._id)
                      console.log("exArr antes", exerciseArr)
                      if (exerciseArr.length === 6)
                      toast.error("You can only add up to 6 exercises per workout.")
                        console.log("ahi merito paps")
                      if (exerciseArr.length < 6) {
                        setExerciseArr((exerciseArr) => [...exerciseArr, item])
                        console.log("lengthhh ", exerciseArr.length)
                      }
                    }}
                  >
                    +
                  </button>
                </div>
              </>
            ))
          ) : (
            <></>
          )}
          {searchResults.length === 0 && newData === false ? (
            exercises.map((item) => (
              <div style={{ backgroundColor: "gray" }}>
                <li key={item._id}>{item.name}</li>
                <button
                  style={{ color: "black" }}
                  onClick={() => setShow(true)}
                >
                  +
                </button>
              </div>
            ))
          ) : (
            <></>
          )}
          {newData === true && searchResults.length === 0 ? (
            <p>NO HAY RESULTADOS</p>
          ) : (
            <></>
          )}
          <p onClick={() => console.log(exercises)}>Prueba de estado: </p>
        </Col>
      </Row>
    </>
  )
}

export default CreateWorkout
