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

    if(user){
      getSessionData()
    } else {
      console.log("you have to login")
    }
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
    let userCopy = {...user}

    userCopy = {
      _id: userInfo._id,
      username: userInfo.username,
      email: userInfo.email,
      user: userInfo.user,
      exercise: userInfo.exercise,
      profile_pic: userInfo.profile_pic,
      weight: {
        value: userInfo.weight,
        weightPrefix: userInfo.weightPrefix
      },
      height: {
        value: userInfo.height,
        heightPrefix: userInfo.heightPrefix
      },
    }
     setUser(userCopy)
  }

  const value = { user, login, updateUserCtx, logout, addProfilePic }

  return <AppContext.Provider {...props} value={value} />
}
//hook
export const useContextInfo = () => useContext(AppContext)
