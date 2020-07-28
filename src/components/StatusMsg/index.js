import React from "react";

const StatusMsg = (props) => {
  return (
    <div className={props.className}>
      <h3>{props.status}</h3>
    </div>
  );
};

export default StatusMsg;
