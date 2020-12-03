import React, { useState } from 'react'
import { Card, Avatar, Row, Col, Typography  } from 'antd';
import { EditOutlined, DeleteOutlined, ImportOutlined, InfoCircleOutlined } from '@ant-design/icons';
import Info from './Info'
import Update from './Update'


const { Title, Text } = Typography;

const Profile = () => {

  const [view, setView] = useState("info")

  function handleInfo() {
    setView('info')
  }

  function handleUpdate() {
    setView('update')
  }

  return (
    <Row>
    <Col span={8}>
      <Card
        actions={[
          <ImportOutlined key="signout"/>,
          <InfoCircleOutlined key="info" onClick={handleInfo}/>,
          <EditOutlined key="edit" onClick={handleUpdate}/>,
          <DeleteOutlined Key="delete"/>
        ]}
      >
      {view === "info" ? 
        <Info />
      : 
        <Update />
      }
      </Card>
    </Col>
  </Row>
  )
}

export default Profile