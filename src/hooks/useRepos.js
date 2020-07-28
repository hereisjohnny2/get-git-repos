import { useState, useEffect } from "react";
import api from "./api";

const loadingRepos = async (setRepos, setStatus, userName) => {
  setStatus("Carregando...");
  try {
    const response = await api.get(`/users/${userName}/repos`);
    const reposData = response.data.map((repo) => {
      const {
        name,
        description,
        html_url,
        owner: { avatar_url },
      } = repo;
      let desc =
        description === null
          ? "Esse repositório não possui descrição... :/"
          : description;
      return { name, desc, html_url, avatar_url };
    });
    setStatus("");
    setRepos(reposData);
  } catch {
    setRepos([]);
    setStatus("Usuário não encontrado :(");
  }
};

function useRepos(userName) {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (userName) {
      loadingRepos(setRepos, setStatus, userName);
    }
  }, [userName]);

  return { repos, status };
}

export default useRepos;
