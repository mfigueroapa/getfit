import React, { useState,useEffect } from "react"
import { Typography, Row, Col } from "antd"
import { useContextInfo } from "../hooks/context"
import { Redirect } from "react-router-dom"
import NewUserInfoForm from '../components/NewUserInfoForm'

const Dashboard = () => {
  const { user } = useContextInfo()
  console.log(user)
//   console.log(user.user, user.email)


 

  
  return (
    <>
    <h1>Dashboard</h1>
    </>
  )
}

export default Dashboard
