import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Nav/Nav";
import DummyPanel from "./Dummy/DummyPanel";
import Dummy from "./Dummy/Dummy";

function App() {
  return (
    <div className="App">
      <Nav />
      <DummyPanel />
      <Dummy />
    </div>
  );
}

export default App;
