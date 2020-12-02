import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Router from "./Router"
import * as serviceWorker from "./serviceWorker"
import { AppCtxProvider } from "./hooks/context"

ReactDOM.render(
  <AppCtxProvider>
    <Router />
  </AppCtxProvider>,
  document.getElementById("root")
)

serviceWorker.unregister()
