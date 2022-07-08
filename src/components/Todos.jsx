import React from 'react'
import { Todo } from './Todo'

export const Todos = ({taskText, tasklist}) => {
  return (
    <div>
        {tasklist.map((tasker) => (<Todo tasker={tasker} tasklist={tasklist} ></Todo>))}
    </div>
  )
}
