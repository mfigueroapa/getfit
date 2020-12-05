import React, {useEffect, useState} from 'react'
import MY_SERVICE from '../services'
import { List, Row, Col, Spin } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import ReactPlayer from "react-player/lazy"

function DisplayWorkout({ match }) {

  const listData = [];
  let exercisesCounter = 0

  const [workout, setWorkout] = useState([])
  const [videos, setVideos] = useState([])
  const [count, setCount] = useState(0)

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
          if(j != data.exercises_per_set-1){
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
      setWorkout(listData)
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


  return (
    <div>
      <List>
      {workout && workout.length == count ?
      <>
      {workout.map((item) => 
        <List.Item>
        {item.set ? 
        <p>{item.set}</p>
        : item.exercise ?
        <Row
        onClick={() => handleVideo(item.id)}
        >
        <Col span={24}>
          <Row>
            <Col span={6}>
              <img
                alt="Exercise"
                src={item.exercise.imageUrl}
                style={{width: "100%"}}
              />
            </Col>
            <Col span={18}>
              0:30 {item.exercise.name}
            </Col>
          </Row>
          {videos[item.id] ? 
          <Row>
            <Col span={24}>
              <ReactPlayer 
              url={item.exercise.videoUrl} 
              />
            </Col>
          </Row>
          : 
          <></>
          }
        </Col>
        </Row>
        :
        <p>Recover: {item.rest}</p>
        }
        </List.Item>
      )}
      </>
      : 
      <p>loading</p>
      }
      </List>
    </div>
  )
}

export default DisplayWorkout