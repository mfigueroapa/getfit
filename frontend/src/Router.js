import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./components/404/NotFound.js"
import LayoutApp from "./components/LayoutApp"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import NewUserInfoForm from "./pages/NewUserInfoForm"
import Exercises from "./pages/Exercises"
import Workouts from "./pages/Workouts"
import CreateWorkout from "./pages/CreateWorkout"
import Recipes from "./pages/Recipes"
import { useContextInfo } from "./hooks/context"
import DisplayWorkout from "./pages/WorkoutDisplay"
import FavWorkouts from "./pages/FavWorkouts"

const Router = () => {
  const { user } = useContextInfo()
  
  return (
    <BrowserRouter>
      <LayoutApp>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/new-user-form" component={NewUserInfoForm} />
          {user ? (
            <>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/workouts" component={Workouts} />
              <Route exact path="/workouts/:id" component={DisplayWorkout} />
              <Route exact path="/fav-workouts" component={FavWorkouts} />
              <Route exact path="/exercises" component={Exercises} />
              <Route exact path="/create-workout" component={CreateWorkout} />
              <Route exact path="/recipes" component={Recipes} />
            </>
          ) : (
            <Route component={Home} />
          )}
          <Route component={NotFound} />
        </Switch>
      </LayoutApp>
    </BrowserRouter>
  )
}

export default Router
