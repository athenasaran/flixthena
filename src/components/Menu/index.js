import React from "react";
import logo from "../../assets/img/logo.png";
import "./Menu.css";
//import ButtonLink from "./components/ButtonLink";
import Button from '../Button';
function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="logo" src={logo} alt="flixthena logo" />
      </a>
      <Button as="a" href="/" className="ButtonLink">
          Novo Vídeo
      </Button>
    </nav>
  );
}
export default Menu;
