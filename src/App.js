import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DummyPage from "./pages/DummyPage/DummyPage";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={DummyPage} />
          <Route path="/login" exact component={Login} />
          <Route path="/home" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
