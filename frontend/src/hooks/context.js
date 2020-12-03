import React, { useState, createContext, useContext, useEffect } from "react"

import MY_SERVICE from "../services"

export const AppContext = createContext()

export const AppCtxProvider = (props) => {
  const [user, setUser] = useState({
    _id: "5fc848273bb8e007bb75d7dc",
    workout: "advanced",
    email: 'usuario@hotmail.com',
    height: "170",
    username: "pepito",
    weight: "70"
  })

  useEffect(() => {
    async function getSessionData() {
      const { user } = await MY_SERVICE.isAuth()
      login(user)
    }

    getSessionData()
  }, [])

  const login = (userInfo) => {
    setUser(userInfo)
  }
  const logout = () => {
    setUser(null)
  }

  const updateUserCtx = (userInfo) => {
    setUser(
      (user.username = userInfo.username),
      (user.email = userInfo.email),
      (user.weight = userInfo.weight),
      (user.height = userInfo.height),
      (user.exercise = userInfo.exercise)
    )
    console.log(user)
  }
  
  const value = { user, login, updateUserCtx, logout}

  return <AppContext.Provider {...props} value={value} />
}
//hook
export const useContextInfo = () => useContext(AppContext)
