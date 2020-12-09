import React, {useEffect, useState} from 'react'
import MY_SERVICE from '../services'
import { List, Row, Col, Typography } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import ReactPlayer from "react-player/lazy"
import "./WorkoutDisplay.scss"
const { Title } = Typography;

function DisplayWorkout({ match }) {

  const listData = [];
  let exercisesCounter = 0

  const [workoutExc, setWorkoutExc] = useState([])
  const [workout, setWorkout] = useState({})
  const [videos, setVideos] = useState([])
  const [count, setCount] = useState(0)
  const [seconds, setSeconds] = useState(30);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    async function getWorkout() {
      const { data } = await MY_SERVICE.getWorkout(match.params.id)
      console.log(data, "📡")
      const videosCopy = data.exercises.map(elm => false)

      setVideos(videosCopy)
      setWorkout(data)

      for(let i = 0; i < data.sets; i++) { 
        listData.push({
          set: "set",
        })
        for (let j = 0; j < data.exercises_per_set; j++) {
          listData.push({
            exercise: data.exercises[exercisesCounter],
            id: exercisesCounter
          })
          if(j !== data.exercises_per_set-1){
            listData.push({
              rest: data.round_rest,
            })
          }
          exercisesCounter++
        }
        listData.push({
          rest: data.set_rest,
        })
      }
      setWorkoutExc(listData)
      setCount(listData.length)
    }

    getWorkout()
  }, [])

  function handleVideo(id) {
    const copy = [...videos]

    if(copy[id]) {
      copy[id] = false
    } else {
      copy[id] = true
    }

    setVideos(copy)
  }

  // //Timer
  // function toggle() {
  //   setIsActive(!isActive);
  // }

  // function reset() {
  //   setSeconds(30);
  //   setIsActive(false);
  // }

  // useEffect(() => {
  //   let interval = null;
  //   if (isActive) {
  //     interval = setInterval(() => {
  //       setSeconds(seconds => seconds - 1);
  //     }, 1000);
  //   } else if (isActive && seconds === 0) {
  //     clearInterval(interval);
  //   }
  //   return () => clearInterval(interval);
  // }, [isActive, seconds]);

  return (
    <div id="display-workout">
      <Row>
        <Col span={24} className="hero">
          <div className="hero__content">
            <Title>{workout.name}</Title>
            <div className="text-block">
              <p>
              Level 
              <br/>
              <span>{workout.level}</span>
              </p>
            </div>
          </div>
          <img className="hero-image" src={workout.image}/>
        </Col>
      </Row>
      <div className="display-workout__container">
      <div className="display-workout__content">
        <Row>
          <Col span={24} className="display-workout__description">
          {workout.description}
          </Col>

          <div className="text-block">
            <p>Created By:</p>
            <span>{workout.created_by}</span>
          </div>
        </Row>
        <List className="display-workout__list">
        {workout && workoutExc.length == count ?
        <>
        {workoutExc.map((item, index) => 
          <List.Item key={index}>
          {item.set ? 
          <div className="list-item-set">
            <p>{item.set} <span>Repeat {workout.repeat} times</span></p>
          </div>
          : item.exercise ?
          <Row
          onClick={() => handleVideo(item.id)}
          className="list-item-exercise"
          >
          <Col span={24}>
            <Row>
              <Col span={6}>
                <img
                  alt="Exercise"
                  src={item.exercise.imageUrl}
                  style={{width: "100%", height: "100%"}}
                />
              </Col>
              <Col span={17} className="list-item-exercise__content">
              <p className="time">0:30</p>
              <p>
              {item.exercise.name}
              <br/>
              <span>{item.exercise.muscle_group}</span>
              </p>
              </Col>
              <Col span={1} className="list-item-buttons">
                <PlayCircleOutlined />
              </Col>
            </Row>
            {videos[item.id] ? 
            <Row>
              <Col span={24} className="list-item-video">
                <ReactPlayer 
                url={item.exercise.videoUrl}
                width="100%"
                />
              </Col>
            </Row>
            : 
            <></>
            }
          </Col>
          </Row>
          :
          <div className="list-item-recover">
            <p>0.{item.rest} <span>Recover</span></p>
          </div>
          }
          </List.Item>
        )}
        </>
        : 
        <p>loading</p>
        }
        </List>
      </div>
      </div>
      {/* <Row className="timer">
      <Col span={18} className="timer__time">
        {seconds}s
      </Col>
      <Col span={3} className="timer__buttons">
        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </Col>
    </Row> */}
    </div>
  )
}

export default DisplayWorkout