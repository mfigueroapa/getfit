import React, { useEffect, useState } from "react"
import { useContextInfo } from "../../hooks/context"

function WorkoutForm(props) {
  const [exercises, setExercises] = useState([])
  const { user } = useContextInfo()


  return (
    <>
      <div>This is where ur exercies will be stacked prios to workout creation</div>
    </>
  )
}

export default WorkoutForm
