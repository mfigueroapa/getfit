import React, { useState,useEffect } from "react"
import { Typography, Row, Col, Modal, Button } from "antd"
import { useContextInfo } from "../hooks/context"
import Profile from "../components/profile/Profile"
import DisplayWorkout from "./WorkoutDisplay"

const Dashboard = () => {
  
  const { user } = useContextInfo()
//   console.log(user.user, user.email)

  return (
    <>
    <Profile/>
    <h1>Dashboard</h1>
    <DisplayWorkout/>
    </>
  )
}

export default Dashboard
