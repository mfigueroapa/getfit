import React, { useState, createContext, useContext, useEffect } from "react"

import MY_SERVICE from "../services"

export const AppContext = createContext()

export const AppCtxProvider = (props) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    async function getSessionData() {
      MY_SERVICE.isAuth()
      .then(response=> {
        console.log("anser from isAuth: ", response.data.user)
      if (response.data.user.exercise !== "") {
        console.log(response.data.user)
        login(response.data.user)
      }
      }).catch(error=>{
      })
    }
    getSessionData()
  }, [])

  const login = (userInfo) => {
    setUser(userInfo)
  }
  
  const logout = () => {
    setUser(null)
  }

  const addProfilePic = (img) => {
    const userCopy = { ...user }
    userCopy.profile_pic = img
    setUser(userCopy)
  }

  const updateUserCtx = (userInfo) => {
    const userCopy = {...user}
    userCopy.username = userInfo.username
     userCopy.weight = userInfo.weight
     userCopy.weightPrefix = userInfo.weightPrefix
     userCopy.height = userInfo.height
     userCopy.heightPrefix = userInfo.heightPrefix
     userCopy.user = userInfo.user
     userCopy.exercise = userInfo.exercise
     userCopy.profile_pic = userInfo.profile_pic
     setUser(userCopy)

    // const userCopy = { ...user }
    // console.log("userCOpy: ----", userCopy)
    // userCopy.email = userInfo.email
    
    // setUser(userCopy)
    // console.log(user)
  }

  const value = { user, login, updateUserCtx, logout, addProfilePic }

  return <AppContext.Provider {...props} value={value} />
}
//hook
export const useContextInfo = () => useContext(AppContext)
