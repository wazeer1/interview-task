import logo from "./logo.svg";
import "./App.css";
import MainRouter from "./components/routers/router/MainRouter";
import { BrowserRouter } from "react-router-dom";
import Store from "./components/context/Store";

function App() {
  return (
    <div className="App">
      <Store>
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </Store>
    </div>
  );
}

export default App;
