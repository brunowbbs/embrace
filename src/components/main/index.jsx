import "./styles.css";

import Button from "../button";

import principalImage from "../../assets/principal.png";

export default function Main() {
  return (
    <div className="container_main">
      <div className="left">
        <h1>Nós cuidamos da tua marca.</h1>
        <p>
          Use esta seção para descrever sua empresa e os produtos que você
          oferece. Você pode compartilhar a história da sua empresa e detalhes
          sobre por que você está no negócio.
        </p>

        <div>
          <input type="text" />
          <Button title="Vamos conversar" onClick={() => {}} />
        </div>
      </div>

      <div className="right">
        <img src={principalImage} />
      </div>
    </div>
  );
}
