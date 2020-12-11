import React from "react"
import { useContextInfo } from "../hooks/context"
import Feed from "../components/Dashboard/Feed"

const Dashboard = () => {
  const { user } = useContextInfo()

  return <>{user ? <Feed></Feed> : ""}</>
}

export default Dashboard
