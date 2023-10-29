import React, { useEffect, useState } from 'react';
import Create from './Create';
import axios from 'axios';
import { BsCircleFill, BsFillCCircleFill, BsFillTrashFill } from 'react-icons/bs';
import './Home.css';


const Home = () => {
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/get/`);
      setTodos(response.data);
    } catch (error) {
      console.error('Error on fetching data: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



  const deleteData = async (todoId) => {
    try {
      await axios.delete(`http://localhost:4000/dlt/${todoId}`);
      setTodos((prevTodos) => prevTodos.filter((item) => item._id !== todoId));
    } catch (error) {
      console.error('Error on deleting data: ', error);
    }
  };

  const updateStatus = async (todoId) => {
    try {
      await axios.put(`http://localhost:4000/updateStatus/${todoId}`, { status: true });
      setTodos((prevTodos) =>
        prevTodos.map((item) => (item._id === todoId ? { ...item, status: true } : item))
      );
    } catch (error) {
      console.error('Error on updating status: ', error);
    }
  };

  return (
    <div>
      <h1 className="heading">To-Do List</h1>
      <Create fetchData={fetchData} />

      {todos.length === 0 ? (
        <h1>No Records</h1>
      ) : (
        todos.map((item) => (
          <div className="task" key={item._id}>
            <div className="checkBox" onClick={() => updateStatus(item._id)}>
              {item.status ? <BsFillCCircleFill /> : <BsCircleFill />}
            </div>
            <h3 className={item.status ? 'titleLineThrough' : ''}>{item.task}</h3>
            <div className="dlt">
              <span>
                <BsFillTrashFill onClick={() => deleteData(item._id)} />
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
