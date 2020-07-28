import React from "react";
import RepoItem from "./components/RepoItem";

const Repos = (props) => {
  return (
    <ul className="repo-list">
      {props.repos.map((repo) => (
        <RepoItem
          key={props.repos.indexOf(repo)}
          name={repo.name}
          avatar_url={repo.avatar_url}
          html_url={repo.html_url}
          description={repo.desc}
          className="top"
        />
      ))}
    </ul>
  );
};

export default Repos;
