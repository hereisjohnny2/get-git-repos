import React from "react";

const Input = (props) => {
  return (
    <input
      onChange={props.onChange}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      src={props.src}
    />
  );
};

export default Input;
