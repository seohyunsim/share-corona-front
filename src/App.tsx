import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Main } from "./components/Common/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Main />
      </Router>
    </div>
  );
}

export default App;
