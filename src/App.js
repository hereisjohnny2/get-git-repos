import React, { useState } from "react";
import Header from "./components/Header";
import Repos from "./components/Repos";
import StatusMsg from "./components/StatusMsg";

import useForm from "./hooks/useForm";
import useRepos from "./hooks/useRepos";

function App() {
  const [{ values }, handleChange, handleSubmit] = useForm();
  const [userName, setUserName] = useState("");

  const getUserRepos = () => {
    setUserName(values.userName);
  };

  const { repos, status } = useRepos(userName);

  return (
    <div className="app">
      <Header onSubmit={handleSubmit(getUserRepos)} onChange={handleChange} />
      <StatusMsg className="loading-status" status={status} />
      <Repos repos={repos} />
    </div>
  );
}

export default App;
