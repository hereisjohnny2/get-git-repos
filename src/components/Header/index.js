import React from "react";

import Logo from "../../assets/img/Logo.svg";
import SearchBtn from "../../assets/img/SearchBtn.svg";
import Input from "./components/Input";

const Header = (props) => {
  return (
    <header>
      <div className="hero-bg">
        <a href="/">
          <h1>GetGitRepos</h1>
        </a>
        <img src={Logo} alt="" />
      </div>
      <form onSubmit={props.onSubmit}>
        <Input
          onChange={props.onChange}
          type="text"
          name="userName"
          placeholder="Nome do Usuário no GitHub..."
        />
        <Input type="image" src={SearchBtn} />
      </form>
    </header>
  );
};

export default Header;
