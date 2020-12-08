import React from "react"
import { useContextInfo } from "../hooks/context"
import Feed from '../components/Dashboard/Feed'

const Dashboard = () => {
  
  const { user } = useContextInfo()
  console.log("user from dashboard: ", user)
  // console.log("user from dashbrd: ",)
//   console.log(user.user, user.email)

  return (
    <>
    {user ? (
    <Feed></Feed>
    ) : ""}
    </>
  )
}

export default Dashboard

