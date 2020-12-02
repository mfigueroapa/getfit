import React, { useState,useEffect } from "react"
import { Typography, Row, Col } from "antd"
import { useContextInfo } from "../hooks/context"
import { Redirect } from "react-router-dom"
import NewUserInfoForm from '../components/NewUserInfoForm'

const Profile = () => {
  const { user } = useContextInfo()
  console.log(user)
//   console.log(user.user, user.email)


 

  
  return user.exercise === '' ? (
    <NewUserInfoForm />
  ) : (
    <div>Welcome to your profile</div>
  )
}

export default Profile
