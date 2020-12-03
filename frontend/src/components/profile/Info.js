import React from 'react'
import { useContextInfo } from '../../hooks/context'
import { Avatar, Row, Col, Typography } from 'antd';

const { Title, Text } = Typography;

const Info = () => {

  const { user } = useContextInfo()
  console.log(user)

  return (
    <>
      <Row>
        <Col span={6}>
          <Avatar 
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" 
          size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
          />
        </Col>
        <Col span={18} style={{textAlign: 'left'}}>
          <Title level={4}>{user.username}</Title>
          <Text type="secondary">{user.workout}</Text>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <p>{user.height}</p>
          <p>{user.weight}</p>
        </Col>
      </Row>
    </>
  )
}

export default Info