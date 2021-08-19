import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DummyPage from "./pages/DummyPage/DummyPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
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
