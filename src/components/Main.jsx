import {React, useState} from 'react'
import { Todos } from './Todos'

export const Main = () => {

    const [text, setText] = useState();
    const [task, setTask] = useState();

    const textHR = (e) =>{
        setText(e.target.value);
    }

    const taskHR = () =>{
        setList([...list, text])
        setTask(text);
        setText('');
        

    }
    const [list, setList] = useState(['a', 'b']);


  return (
    <div className='min-h-screen w-full flex justify-center items-center bg-yellow-200'>
        <div className='w w-9/12 rounded-md bg-white h-96 px-6'>
            <div className="flex justify-between  py-6 items-start">
                <input type="text" onChange={textHR} className='border-2 px-3 border-black w-2/3 h-14 rounded-md border-opacity-40' value={text} />
                <button className="px-6 rounded-md py-4 w-1/3 ml-2 bg-green-600 font-bold" onClick={taskHR}>ADD</button>
            </div>
            <Todos taskText={task} tasklist={list} />
            
            
        </div>
    </div>
  )
}
