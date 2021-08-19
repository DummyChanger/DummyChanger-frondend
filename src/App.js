import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Nav/Nav.jsx";
import DummyPage from "./pages/DummyPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <DummyPage />
          </Route>
          <Route path="/login" exact>
            <h4>Login</h4>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
