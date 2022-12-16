import React, { useState, useEffect } from "react";
import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("Show Task Bar");
  const [task, setTask] = useState([]);
  const url ="https://63525cefa9f3f34c373b99f2.mockapi.io/api/tasks"

  const toggle = () => {
    setIsOpen(!isOpen);
    const buttonText = isOpen ? "Show Task Bar" : "Hide Task Bar";
    setText(buttonText);
  };

  //CRUD -READ 
  const getTask = async()=>{
    const {data}= await axios(url)
    setTask(data);
    console.log(data);
  }

  useEffect(() => {
  getTask()  
  }, [])
  

  return (
    <div>
      <Button
        onClick={() => {toggle()}}
        size="lg"
        variant="danger">{text}</Button>
       { isOpen && <AddTask />}

      <TaskList />
    </div>
  );
};

export default Home;
