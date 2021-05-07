import {BrowserRouter as Router} from "react-router-dom";

import Routes from "./routes";
import Menu from "./components/menu";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
