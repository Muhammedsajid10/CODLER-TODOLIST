import React, { useState } from 'react'
import axios from 'axios'
import './Create.css'

const Create = ({fetchData}) => {
    const [task,setTask] = useState("")

    const handleAdd = async () => {
        try {
            const response = await axios.post('http://localhost:4000',{task})
            console.log(response.data);
            fetchData()
        } catch (error) {
            console.log('Error on Adding task : ',error);
        }
        
    }

  return (
    <div className='createForm'>
      <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} placeholder='type item..🖊️' />
      <button  onClick={handleAdd}>Add</button>
    </div>
  )
}
export default Create













