import React, { useState } from 'react'
import { Card, Row, Col } from 'antd';
import { EditOutlined, DeleteOutlined, ImportOutlined, InfoCircleOutlined } from '@ant-design/icons';
import Info from './Info'
import Update from './Update'
import { useContextInfo } from '../../hooks/context'
import MY_SERVICE from '../../services'

const Profile = () => {
  const { user, logout } = useContextInfo()
  const [view, setView] = useState("info")

  function handleInfo() {
    setView('info')
  }

  function handleUpdate() {
    setView('update')
  }

  async function handleLogout() {
    await MY_SERVICE.logOut()
    logout()
  }

  async function handleDelete() {
    await MY_SERVICE.deleteUser(user._id)
    logout()
  }

  return (
    <Row>
    <Col span={8}>
      <Card
        actions={[
          <ImportOutlined key="signout" onClick={handleLogout}/>,
          <InfoCircleOutlined key="info" onClick={handleInfo}/>,
          <EditOutlined key="edit" onClick={handleUpdate}/>,
          <DeleteOutlined Key="delete" onClick={handleDelete}/>
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