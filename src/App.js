import { BrowserRouter as Router, Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Detail from "./pages/Detail";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Router basename={"/ytweb-react"}>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/detail">Detail</Link>
        </div>
        <Routes>
          <Route path={"/"} element={<Main />} exact />
          <Route path={"/about"} element={<About />} exact />
          <Route path={"/detail"} element={<Detail />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
