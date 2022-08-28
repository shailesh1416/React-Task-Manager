import React from "react";
import user from "../images/task.png";

const TaskCard = (props) => {
  const { id, title, description,isCompleted } = props.task;
  return (
    <div className="item" >
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{title}</div>
        <div>{description}</div>
        

      </div>
      {/* <i
        style={{ color: "green", marginTop: "7px" }}
        onClick={() => props.doneHander(id)}
      >Done</i> */}
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHander(id)}
      ></i>
    </div>
  );
};

export default TaskCard;
