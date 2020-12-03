import React, { useState, createContext, useContext, useEffect } from "react"

import MY_SERVICE from "../services"

export const AppContext = createContext()

export const AppCtxProvider = (props) => {
  const [user, setUser] = useState(null)

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
      (user.weight = userInfo.weight),
      (user.height = userInfo.height),
      (user.exercise = userInfo.exercise)
    )
  }

  const value = { user, login, updateUserCtx, logout}
  return <AppContext.Provider {...props} value={value} />
}
//hook
export const useContextInfo = () => useContext(AppContext)
