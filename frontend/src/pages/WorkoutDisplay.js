import React, {useEffect, useState} from 'react'
import MY_SERVICE from '../services'
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

function DisplayWorkout() {

  const [workout, setWorkout] = useState({})

  useEffect(() => {
    async function getWorkout() {
      const { data } = await MY_SERVICE.getWorkout("5fc9ca4efad4f15ceaec42c8")
      setWorkout(data)
    }

    getWorkout()
  }, [])

  const listData = [];
  const sets = 2
  let setsCounter = 0
  const exercises = 3
  let exercisesCounter = 1
  for(let i = 0; i < sets; i++) {
    listData.push({
      set: "set",
    })
    for (let j = 0; j < exercises; j++) {
      listData.push({
        exercise: exercisesCounter,
      })
      if(j != exercises-1){
        listData.push({
          rest: 30,
        })
      }
      exercisesCounter++
    }
    listData.push({
      rest: 60,
    })
  }
  console.log(listData)

  // for (let i = 0; i < 23; i++) {
  //   listData.push({
  //     href: 'https://ant.design',
  //     title: `ant design part ${i}`,
  //     avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  //     description:
  //       'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  //     content:
  //       'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  //   });
  // }

  return (
    <div>
      <List
      itemLayout="vertical"
      size="large"
      dataSource={listData}
      renderItem={item => (
        <List.Item
          key={item.title}
          extra={
            <img
              width={272}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          }
        >
          {item.set ? 
          <p>{item.set}</p>
          : item.exercise ?
          <p>{item.exercise}</p>
          :
          <p>{item.rest}</p>
          }
        </List.Item>
      )}
      />
    </div>
  )
}

export default DisplayWorkout