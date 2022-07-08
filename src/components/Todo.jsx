import React from 'react'

export const Todo = ({taskText, tasker, tasklist}) => {
    const dltHR = (e) =>{
        
        console.log(tasker)
    }
  return (
    <div className='flex mt-2e'>
        <h1 className="task">
            {tasker}
        </h1>
        <button className="dltBtn" onClick={dltHR}>Delete</button>
    </div>
  )
}
