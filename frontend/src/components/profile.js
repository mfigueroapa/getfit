import React from 'react'
import { useContextInfo } from '../hooks/context'
import { Card, Avatar, Row, Col, Typography  } from 'antd';
import { EditOutlined, DeleteOutlined, ImportOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Profile = () => {

  const { user } = useContextInfo()
  console.log(user)

  return (
    <Row>
    <Col span={12} offset={6}>
      <Card
        actions={[
          <ImportOutlined key="signout"/>,
          <EditOutlined key="edit" />,
          <EditOutlined key="edit" />,
          <DeleteOutlined Key="delete"/>
        ]}
      >
        <Row>
          <Col span={6}>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </Col>
          <Col span={18} style={{textAlign: 'left'}}>
            <Title level={3}>Ant Design</Title>
          </Col>
        </Row>
        <p>Card Content</p>
      </Card>
    </Col>
  </Row>
  )
}

export default Profile