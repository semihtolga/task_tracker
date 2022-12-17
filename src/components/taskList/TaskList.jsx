import axios from "axios";
import React from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";

const TaskList = ({ task,getTask }) => {

  const deleteTask = async(id) =>{
    const url="https://63525cefa9f3f34c373b99f2.mockapi.io/api/tasks"
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      
    }
    getTask(); //yenilenmeden silmesi için ekledik. Home dan gönderdik TaskList fonk. ekledik.
  }



  return (
    <div>
      {task.map((item) => {
        const { id, task, date } = item;
        return (
          <div
          key={id} 
          className="mt-2 d-flex justify-content-between bg-secondary rounded-2 p-2">
            <div>
              <h4>{task}</h4>
              <p>{date}</p>
            </div>

            <div>
              <RiDeleteBack2Fill
              onClick={()=>{deleteTask(id)}} //id eklersek sadece tıkladığımızı sileriz. eklemezsek tüm listeyi sileriz.
              style={{
                cursor: 'pointer',
                marginRight:"20px",
                fontSize:"2rem",
                boxShadow:"2px 2px 2px #ECAB9E"
              }} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
