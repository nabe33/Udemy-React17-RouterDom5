import { BrowserRouter, Link } from "react-router-dom";
import "./styles.css";
import { Router } from "./router/Router";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/page1">Page1</Link>
          <Link to="/page2">Page2</Link>
        </div>
      </div>
      <Router />
      <style jsx="true">{`
        .menu {
          display: flex;
          flex-flow: column;
          gap: 1ex;
        }
      `}</style>
    </BrowserRouter>
  );
}
