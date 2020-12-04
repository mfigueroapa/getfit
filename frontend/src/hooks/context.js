import React, { useState, createContext, useContext, useEffect } from "react"

import MY_SERVICE from "../services"

export const AppContext = createContext()

export const AppCtxProvider = (props) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    async function getSessionData() {
      const respond = await MY_SERVICE.isAuth()
      console.log(respond.data.user)
      login(respond.data.user)
    }

    getSessionData()
  }, [])

  const login = (userInfo) => {
    setUser(userInfo)
  }
  const logout = () => {
    setUser(null)
  }

  const addProfilePic = img => {
    const userCopy = {...user}
    userCopy.profile_pic = img
    setUser(userCopy)
  }

  const updateUserCtx = (userInfo) => {
    const userCopy = {...user}
    userCopy.username = userInfo.username
    userCopy.email = userInfo.email
    userCopy.weight = userInfo.weight
    userCopy.height = userInfo.height
    userCopy.exercise = userInfo.exercise

    setUser(userCopy)
    console.log(user)
  }
  
  const value = { user, login, updateUserCtx, logout, addProfilePic}

  return <AppContext.Provider {...props} value={value} />
}
//hook
export const useContextInfo = () => useContext(AppContext)
