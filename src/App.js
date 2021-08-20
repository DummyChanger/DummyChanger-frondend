// @ts-nocheck
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DummyPage from "./pages/DummyPage/DummyPage";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/dummy-panel" exact component={DummyPage} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
