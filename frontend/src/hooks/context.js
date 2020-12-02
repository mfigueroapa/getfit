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

//   const updateUserCtx = (userInfo) => {
//     // setUser(
//     //   (user.username = userInfo.user),
//     //   (user.course = userInfo.course),
//     //   (user.campus = userInfo.campus)
//     // )
//     // console.log(user)
//   }

  const value = { user, login }

  return <AppContext.Provider {...props} value={value} />
}

// Opcional: agregamos un custom hook para evitar consumir en cada componente nuestro ctx

export const useContextInfo = () => useContext(AppContext)
