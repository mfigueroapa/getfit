import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Router from "./Router"
import * as serviceWorker from "./serviceWorker"
import { AppCtxProvider } from "./hooks/context"
import "antd/dist/antd.dark.css"
import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.render(
  <>
    <ToastContainer
      position="top-right"
      autoClose={4500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      transition={Slide}
    />
    <AppCtxProvider>
      <Router />
    </AppCtxProvider>
  </>,
  document.getElementById("root")
)

serviceWorker.unregister()
