import React from "react";
import logo from "../../assets/img/logo.png";
import "./Menu.css";
import { Link } from 'react-router-dom';
//import ButtonLink from "./components/ButtonLink";
import Button from '../Button';
function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="logo" src={logo} alt="flixthena logo" />
      </Link>
      
      <Button as={Link} to="/cadastro/video" className="ButtonLink">
          Novo Vídeo
      </Button>
    </nav>
  );
}
export default Menu;
