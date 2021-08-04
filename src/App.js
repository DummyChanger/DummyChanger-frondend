import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Nav/Nav";
import DummyPanel from "./Dummy/DummyPanel";
import Dummy from "./Dummy/Dummy";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="dummy-page">
        <DummyPanel />
        <Dummy />
      </div>
    </div>
  );
}

export default App;
