import React from "react";
import TaskCard from "./TaskCard";

const TaskList = (props) => {
  console.log(props);

  const deleteTaskHandler = (id) => {
    props.getTaskId(id);
  };
  const doneHandler = (id)=>{
    // console.log(id)
    props.getDoneId(id);
  }
  const renderTaskList = props.tasks.map((task) => {
    return (
      <TaskCard
        task={task}
        clickHander={deleteTaskHandler}
        doneHander = {doneHandler}
        key={task.id}
      />
    );
  });
  return <div className="ui celled list">{renderTaskList}</div>;
};

export default  TaskList;
