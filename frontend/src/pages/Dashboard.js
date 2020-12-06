import React, { useState,useEffect } from "react"
import { Typography, Row, Col, Modal, Button } from "antd"
import { useContextInfo } from "../hooks/context"
import Main from '../components/Dashboard/Main'

const Dashboard = () => {
  
  const { user } = useContextInfo()
  console.log("user from dashbrd: ", user)
  // console.log("user from dashbrd: ",)
//   console.log(user.user, user.email)

  return (
    <>
    {user ? (
    <Main></Main>
    ) : ""}
    {/* <h1>Dashboard</h1> */}
    </>
  )
}

export default Dashboard

