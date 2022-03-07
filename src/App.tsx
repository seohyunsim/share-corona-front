import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Main } from "./components/Common/Main";
import { ScrollToTop } from "./components/Common/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Main />
      </Router>
    </div>
  );
}

export default App;
