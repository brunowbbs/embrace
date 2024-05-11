import "./styles.css";

import logo from "../../assets/logo.svg";

import Button from "../button";

export default function Header() {
  function handleClick() {
    alert("ok");
  }

  return (
    <nav className="container_header">
      <img src={logo} />

      <ul>
        <li>Como funciona</li>
        <li>Nosso trabalho</li>
        <li>Preços</li>
        <li>Sobre nos</li>
      </ul>

      <Button title="Try it Now" onClick={handleClick} />
    </nav>
  );
}
