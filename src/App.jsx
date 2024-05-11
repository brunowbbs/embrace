import Header from "./components/header";
import Main from "./components/main";

import "./styles.css";

export default function App() {
  return (
    <div className="container_app">
      <div className="content_app">
        <Header />
        <Main />
      </div>
    </div>
  );
}
