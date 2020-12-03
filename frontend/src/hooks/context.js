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

//   const addProfilePic = (img) => {
//     //   setUser({ ...user, img })
//   }

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
    // console.log("user del contexto despues del supuesto update",user)
  }

  const value = { user, login, updateUserCtx, logout }

  return <AppContext.Provider {...props} value={value} />
}

// Opcional: agregamos un custom hook para evitar consumir en cada componente nuestro ctx

export const useContextInfo = () => useContext(AppContext)
