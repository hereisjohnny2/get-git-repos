import React from "react";

const RepoItem = (props) => {
  return (
    <li>
      <img src={props.avatar_url} alt="github user" />
      <strong>
        <a href={props.html_url}>{props.name}</a>
      </strong>
      <p>{props.description}</p>
    </li>
  );
};

export default RepoItem;
