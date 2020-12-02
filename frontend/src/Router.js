import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./components/home/Home"
import NotFound from "./components/404/NotFound.js"
import LayoutApp from "./components/LayoutApp"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Profile from "./pages/Profile"

const Router = () => (
  <BrowserRouter>
    <LayoutApp>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </LayoutApp>
  </BrowserRouter>
)

export default Router
