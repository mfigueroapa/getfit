import React, { useState } from 'react'
import axios from "axios"
import { useContextInfo } from '../../hooks/context'
import { Avatar, Row, Col, Typography, Upload, Button, message, Form } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import MY_SERVICE from '../../services'

const cloudinaryAPI = 'https://api.cloudinary.com/v1_1/dj52orqog/image/upload'

const { Title, Text } = Typography;

const Info = () => {

  const { user, addProfilePic } = useContextInfo()
  const [image, setImage] = useState(user.profile_pic)
  console.log(user, "🔥")


  const handleUploadFile = async (file) => {
    console.log(file, "💾");
    let data = new FormData()

    data.append('file', file)
    data.append('upload_preset', 'l89c8zgu')
    
    const result = await axios.post(cloudinaryAPI, data)

    const imageUrl = result.data.secure_url

    await MY_SERVICE.updatePic(user._id, {profile_pic: imageUrl})

    addProfilePic(imageUrl)

    setImage(imageUrl)

  }

  return (
    <>
      <Row>
        <Col span={6}>
          <Avatar 
          src={image} 
          size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
          />
            <Upload 
            name="file"
            beforeUpload={handleUploadFile}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
        </Col>
        <Col span={18} style={{textAlign: 'left'}}>
          <Title level={4}>{user.username}</Title>
          <Text type="secondary">{user.exercise}</Text>
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